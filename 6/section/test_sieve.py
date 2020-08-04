# Write some tests for sieve using unittest
import unittest
from sieve import sieve

POS = [i + 1 for i in range(10)]


class Tests(unittest.TestCase):
    def test_pos(self):
        """Tests filtering of positive even numbers"""
        self.assertEqual(sieve(POS, 2), [1, 3, 5, 7, 9])

    def test_non_int(self):
        """Tests that exception is thrown when n is not an int"""
        self.assertRaises(ValueError, sieve, POS, "a")

if __name__ == "__main__":
    unittest.main()


"""
Write a function sieve(ls, n) that:

Takes in:
    -ls: A list of integers
    -n: A number

Outputs:
    -The same list, but with all numbers divisible by n removed
    -If n is 0, output the empty list
    -If n is negative, throw an exception
    -If n or an element of ls is not an integer, throw an exception
"""