document.addEventListener('DOMContentLoaded', function() {

    // Manage button 1 being clicked
    document.querySelector('#button1').addEventListener('click', function() {

        // Do some initial stuff
        let x = 4;
        if (x === 4) {
            alert("Yay!")
        }

        // Make an API call
        fetch('some_stuff')
        .then(response => response.json())
        .then(items => {

            // Print items
            console.log(items);
            items.forEach(function(item) {

                // Make a DOM object from an item
                dom_item.addEventListener('click', function() {
                    // What to do when our new item is clicked
                    // maybe there are a few lines here
                    // who knows, this could be a really long function
                });
                // Add the item to the screen
            });
        });
    });
});