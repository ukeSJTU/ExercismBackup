def encode(plain_text):
    atbash_text = atbash_transform(plain_text)
    cleaned = ''.join(c for c in atbash_text if c.isalnum())
    return ' '.join(cleaned[i:i+5] for i in range(0, len(cleaned), 5))


def decode(ciphered_text):
    cleaned = ciphered_text.replace(' ', '')
    return atbash_transform(cleaned)


def atbash_transform(text):
    result = []
    for char in text.lower():
        if 'a' <= char <= 'z':
            result.append(chr(ord('z') - (ord(char) - ord('a'))))
        elif char.isdigit():
            result.append(char)
    return ''.join(result)
