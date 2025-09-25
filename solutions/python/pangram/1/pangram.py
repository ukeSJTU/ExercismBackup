def is_pangram(sentence):
    sentence = sentence.lower()
    cnt = [0] * 26
    for c in sentence:
        if 'a' <= c <= 'z':
            cnt[ord(c) - ord('a')] += 1

    for n in cnt:
        if n == 0:
            return False
    return True
