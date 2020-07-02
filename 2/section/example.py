import re

s = "Hello, my name is connor and I do not like banannas."

t = re.sub(r"(a|b)+", "c", s)

v = re.sub(r"my name is ([a-z]+?) ", "\\1 is my name ", s)

print(v)