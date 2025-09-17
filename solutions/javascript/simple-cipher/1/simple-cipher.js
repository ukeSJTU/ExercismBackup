//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Cipher {
  constructor(key) {
    if (key === undefined) {
      // Generate a random key of at least 100 lowercase letters
      this._key = this._generateRandomKey();
    } else if (key === '') {
      throw new Error('Key cannot be empty');
    } else if (!this._isValidKey(key)) {
      throw new Error('Key must contain only lowercase letters');
    } else {
      this._key = key;
    }
  }

  encode(plaintext) {
    return this._transform(plaintext, 1);
  }

  decode(ciphertext) {
    return this._transform(ciphertext, -1);
  }

  get key() {
    return this._key;
  }

  _generateRandomKey() {
    const length = 100 + Math.floor(Math.random() * 50); // 100-150 characters
    let key = '';
    for (let i = 0; i < length; i++) {
      // Generate random lowercase letter (a-z)
      key += String.fromCharCode(97 + Math.floor(Math.random() * 26));
    }
    return key;
  }

  _isValidKey(key) {
    // Check if key contains only lowercase letters
    return /^[a-z]+$/.test(key);
  }

  _transform(text, direction) {
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      
      // Only transform lowercase letters
      if (char >= 'a' && char <= 'z') {
        // Get the shift amount from the key
        const keyChar = this._key[keyIndex % this._key.length];
        const shift = keyChar.charCodeAt(0) - 97; // 'a' = 0, 'b' = 1, etc.
        
        // Apply the shift (direction = 1 for encode, -1 for decode)
        const charCode = char.charCodeAt(0) - 97; // Convert to 0-25
        const shiftedCode = (charCode + direction * shift + 26) % 26;
        const shiftedChar = String.fromCharCode(shiftedCode + 97);
        
        result += shiftedChar;
        keyIndex++;
      } else {
        // Non-lowercase letters are not transformed
        result += char;
      }
    }

    return result;
  }
}
