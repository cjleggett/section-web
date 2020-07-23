# Write some tests for filter using unittest
import unittest
from seive import seive

EMPTY = list()
POS = [i for i in range(1, 11)]
REPEATS = POS + POS
NEGATIVES = [-i for i in POS]
BOTH = POS + [0] + NEGATIVES
NONINTS = POS + [10.5, 11.5]


class Tests(unittest.TestCase):
    def test_0(self):
        """Makes sure an empty list is returned for n=0"""
        self.assertEqual(seive(POS, 0), [])

    def test_empty(self):
        """Check that an empty list remains empty"""
        self.assertEqual(seive(EMPTY, 4), [])
    
    def test_positives(self):
        """Check that a list of all positive numbers is filtered"""
        self.assertEqual(seive(POS, 3), [1, 2, 4, 5, 7, 8, 10])

    def test_negatives(self):
        """Check that a list of all positive numbers is filtered"""
        self.assertEqual(seive(NEGATIVES, 3), [-1, -2, -4, -5, -7, -8, -10])

    def test_both(self):
        """Filters correctly on list of pos, neg, 0"""
        self.assertEqual(seive(BOTH, 2), [1, 3, 5, 7, 9, -1, -3, -5, -7, -9])

    def test_repeats(self):
        """Check that repeat values are both filtered"""
        self.assertEqual(seive(REPEATS, 3), [1, 2, 4, 5, 7, 8, 10, 1, 2, 4, 5, 7, 8, 10])

    def test_negative_n(self):
        """Check that a ValueError is thrown for negative n"""
        self.assertRaises(ValueError, seive, POS, -5)

    def test_non_integers(self):
        """Check that a ValueError is thrown for decimals in list"""
        self.assertRaises(ValueError, seive, NONINTS, -5)


if __name__ == "__main__":
    unittest.main()