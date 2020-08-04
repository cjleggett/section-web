from django.test import Client, TestCase
from .models import User, Category, Listing, Comment, Bid
from django.db.models import Max
# Create your tests here.

class CommerceTestCase(TestCase):
    def setUp(self):
        
        # Create some users
        users = {name: User.objects.create_user(username=name, password=name) 
                 for name in ["a", "b", "c"] }
        
        # Create some Categories
        categories = {name: Category.objects.create(name=name) 
                      for name in ["Sports", "Home", "Work"]}

        # Create some listings
        listings = {
            "ball": Listing.objects.create(category=categories["Sports"], 
                                           seller=users["a"], 
                                           starting_bid=15.95,
                                           title="Soccer Ball"),
            "chair": Listing.objects.create(category=categories["Home"], 
                                            seller=users["b"], 
                                            starting_bid=76.99,
                                            title="Red Leather Chair"),
            "monitor": Listing.objects.create(category=categories["Work"], 
                                              seller=users["c"], 
                                              starting_bid=20.45,
                                              title="Dell 20 inch monitor")
        }

        # Make some bids
        Bid.objects.create(amount=20, bidder=users["b"], listing=listings["ball"])
        Bid.objects.create(amount=22, bidder=users["c"], listing=listings["ball"])
        Bid.objects.create(amount=77, bidder=users["a"], listing=listings["chair"])
        Bid.objects.create(amount=25.5, bidder=users["b"], listing=listings["monitor"])

        # Create a client
        self.c = Client()
        self.c.login(username="a", password="a")

        
    def test_listings_count(self):
        """Testing number of listings"""
        listings = Listing.objects.all()
        self.assertEqual(3, len(listings))

    def test_users_count(self):
        """Testing number of users"""
        users = User.objects.all()
        self.assertEqual(3, len(users))

    def test_bids_count(self):
        """Testing number of bids"""
        bids = Bid.objects.all()
        self.assertEqual(4, len(bids))

    def test_categories_count(self):
        """Testing number of categories"""
        categories = Category.objects.all()
        self.assertEqual(3, len(categories))

    def test_valid_listing(self):
        """Testing output of a valid listing page"""
        listing = Listing.objects.get(title="Red Leather Chair")
        response = self.c.get(f"/listings/{listing.id}")
        lister = response.context["listing"].seller.username
        self.assertEqual(lister, "b")


    def test_invalid_listing(self):
        """Testing listing page when it doesn't exist"""
        max_id = Listing.objects.all().aggregate(Max("id"))["id__max"]

        response = self.c.get(f"/listings/{max_id + 1}")
        self.assertEqual(response.status_code, 404)

    def test_max_bid(self):
        bid1 = Listing.objects.get(title="Soccer Ball").top_bid()
        bid2 = Bid.objects.get(amount=22)
        self.assertEqual(bid1, bid2)

    def test_make_comment(self):
        listing = Listing.objects.get(title="Red Leather Chair")
        response = self.c.post(f"/listings/{listing.id}/comment", {
            "comment": "Nice Chair!"
        })
        comment = Comment.objects.get(listing=listing)
        self.assertEqual("Nice Chair!", comment.content)



    