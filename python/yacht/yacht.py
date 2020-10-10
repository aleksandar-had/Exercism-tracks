"""
This exercise stub and the test suite contain several enumerated constants.

Since Python 2 does not have the enum module, the idiomatic way to write
enumerated constants has traditionally been a NAME assigned to an arbitrary,
but unique value. An integer is traditionally used because it’s memory
efficient.
It is a common practice to export both constants and functions that work with
those constants (ex. the constants in the os, subprocess and re modules).

You can learn more here: https://en.wikipedia.org/wiki/Enumerated_type
"""


# Score categories.
# Change the values as you see fit.
from typing import Counter


YACHT = lambda x: 50 if len(set(x)) == 1 else 0
ONES = lambda x: 1 * x.count(1)
TWOS = lambda x: 2 * x.count(2)
THREES = lambda x: 3 * x.count(3)
FOURS = lambda x: 4 * x.count(4)
FIVES = lambda x: 5 * x.count(5)
SIXES = lambda x: 6 * x.count(6)
FULL_HOUSE = lambda x: sum(x) if sorted(Counter(x).values()) == [2, 3] else 0
FOUR_OF_A_KIND = lambda x: sum(d * 4 for d in set(x) if x.count(d) >= 4)
LITTLE_STRAIGHT = lambda x: 30 if sorted(x) == [1, 2, 3, 4, 5] else 0
BIG_STRAIGHT = lambda x: 30 if sorted(x) == [2, 3, 4, 5, 6] else 0
CHOICE = lambda x: sum(x)


def score(dice, category):
    return category(dice)
