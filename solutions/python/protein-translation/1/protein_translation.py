def proteins(strand):
    mp = {
        'AUG': 'Methionine',
        'UUU': 'Phenylalanine',
        'UUC': 'Phenylalanine',
        'UUA': 'Leucine',
        'UUG': 'Leucine',
        'UCU': 'Serine',
        'UCC': 'Serine',
        'UCA': 'Serine',
        'UCG': 'Serine',
        'UAU': 'Tyrosine',
        'UAC': 'Tyrosine',
        'UGU': 'Cysteine',
        'UGC': 'Cysteine',
        'UGG': 'Tryptophan',
        'UAA': 'STOP',
        'UAG': 'STOP',
        'UGA': 'STOP'
    }

    amino_acid_seq = []
    for i in range(0, len(strand), 3):
        codon = strand[i:i+3]
        amino_acid = mp[codon]
        if amino_acid == "STOP":
            break
        amino_acid_seq.append(amino_acid)
        
    return amino_acid_seq
