def to_rna(dna_strand):
    translation_table = str.maketrans('GCTA', 'CGAU')
    
    # Validate that all characters are valid DNA nucleotides
    valid_nucleotides = set('GCTA')
    if not all(nucleotide in valid_nucleotides for nucleotide in dna_strand):
        invalid_chars = set(dna_strand) - valid_nucleotides
        raise ValueError(f"Invalid nucleotides found: {invalid_chars}")
    
    return dna_strand.translate(translation_table)
