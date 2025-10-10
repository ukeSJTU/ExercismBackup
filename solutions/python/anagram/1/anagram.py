from collections import Counter

def find_anagrams(word, candidates):
    target = Counter(word.lower())
    return [c for c in candidates 
            if c.lower() != word.lower() and Counter(c.lower()) == target]
