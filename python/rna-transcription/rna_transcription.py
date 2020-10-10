def to_rna(dna_strand):
    rna_strand = ""
    dna_to_rna = {"C": "G", "G": "C", "T": "A", "A": "U"}
    for dna in dna_strand:
        try:
            rna_strand += dna_to_rna[dna]
        except AttributeError:
            raise Exception("DNA transcription unknown!")
    return rna_strand
