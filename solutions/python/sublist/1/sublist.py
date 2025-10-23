"""
This exercise stub and the test suite contain several enumerated constants.

Enumerated constants can be done with a NAME assigned to an arbitrary,
but unique value. An integer is traditionally used because it's memory
efficient.
It is a common practice to export both constants and functions that work with
those constants (ex. the constants in the os, subprocess and re modules).

You can learn more here: https://en.wikipedia.org/wiki/Enumerated_type
"""

# Possible sublist categories.
# Change the values as you see fit.
SUBLIST = 1
SUPERLIST = 2
EQUAL = 3
UNEQUAL = 4


def sublist(list_one, list_two):
    # 如果两个列表相等
    if list_one == list_two:
        return EQUAL
    
    # 如果 list_one 为空,则它是任何非空列表的子集
    if len(list_one) == 0:
        return SUBLIST
    
    # 如果 list_two 为空,则 list_one 是它的超集
    if len(list_two) == 0:
        return SUPERLIST
    
    # 检查 list_one 是否是 list_two 的子列表
    if is_contiguous_sublist(list_one, list_two):
        return SUBLIST
    
    # 检查 list_one 是否是 list_two 的超列表
    if is_contiguous_sublist(list_two, list_one):
        return SUPERLIST
    
    # 否则两个列表不相等
    return UNEQUAL


def is_contiguous_sublist(smaller, larger):
    len_smaller = len(smaller)
    len_larger = len(larger)
    
    # 如果 smaller 比 larger 长,则不可能是子列表
    if len_smaller > len_larger:
        return False
    
    # 遍历 larger 中所有可能的起始位置
    for i in range(len_larger - len_smaller + 1):
        # 检查从位置 i 开始的子序列是否与 smaller 匹配
        if larger[i:i + len_smaller] == smaller:
            return True
    
    return False
