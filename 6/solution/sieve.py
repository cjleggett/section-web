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

def sieve(ls, n):

    # Check for 0 as n value
    if n == 0:
        return []

    # Check if n is a non-negative integer
    if n < 0 or not isinstance(n, int):
        raise ValueError("n should be a nonnegative integer")

    # Check that all elements of lists are integers
    if any([not isinstance(i, int) for i in ls]):
          raise ValueError("All elements of ls should be integers")

    # Return filtered list
    return [i for i in ls if i % n != 0]