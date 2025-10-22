def translate(text):
    """
    Translate English text to Pig Latin according to the four rules.
    
    Args:
        text: A string containing one or more English words
        
    Returns:
        A string with the words translated to Pig Latin
    """
    words = text.split()
    translated_words = [translate_word(word) for word in words]
    return ' '.join(translated_words)


def translate_word(word):
    """
    Translate a single word to Pig Latin.
    
    Args:
        word: A single English word
        
    Returns:
        The word translated to Pig Latin
    """
    vowels = 'aeiou'
    
    # Rule 1: Word begins with a vowel, "xr", or "yt"
    if word[0] in vowels or word.startswith('xr') or word.startswith('yt'):
        return word + 'ay'
    
    # Rule 3: Word contains "qu" - need to check this before Rule 2
    # Find position of "qu" if it exists
    qu_index = word.find('qu')
    if qu_index != -1:
        # Check if all characters before "qu" are consonants
        all_consonants_before_qu = True
        for i in range(qu_index):
            if word[i] in vowels:
                all_consonants_before_qu = False
                break
        
        if all_consonants_before_qu:
            # Move everything up to and including "qu" to the end
            return word[qu_index + 2:] + word[:qu_index + 2] + 'ay'
    
    # Rule 4: Word starts with consonants followed by "y"
    # Find the position of "y" (but not at the beginning)
    for i in range(1, len(word)):
        if word[i] == 'y':
            # Check if all characters before "y" are consonants
            all_consonants = True
            for j in range(i):
                if word[j] in vowels:
                    all_consonants = False
                    break
            
            if all_consonants:
                # Move consonants before "y" to the end
                return word[i:] + word[:i] + 'ay'
            break
    
    # Rule 2: Word begins with one or more consonants
    # Find the first vowel
    first_vowel_index = -1
    for i, char in enumerate(word):
        if char in vowels:
            first_vowel_index = i
            break
    
    if first_vowel_index > 0:
        # Move consonants to the end
        return word[first_vowel_index:] + word[:first_vowel_index] + 'ay'
    
    # Default case (shouldn't reach here with valid input)
    return word + 'ay'