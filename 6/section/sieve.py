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
    try:
        new_ls = list()
        for i in ls:
            if i % n:
                new_ls.append(i)
        return new_ls
    except TypeError:
        print("n must be an integer")
        raise ValueError()