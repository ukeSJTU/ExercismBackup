def count_words(sentence):
    import re
    
    # Convert to lowercase for case-insensitive counting
    sentence = sentence.lower()
    
    # Use regex to find all words
    # A word is: one or more alphanumeric characters, possibly with apostrophes inside
    # Pattern matches alphanumeric chars with optional internal apostrophes
    words = re.findall(r"[a-z0-9]+(?:'[a-z0-9]+)*", sentence)
    
    # Count occurrences
    word_count = {}
    for word in words:
        word_count[word] = word_count.get(word, 0) + 1
    
    return word_count
