//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (rna) => {
  if (!rna) {
    return [];
  }
  // dislike multiple returns within a function but maybe here it makes sense :?

  let codons = rna.match(/.{1,3}/g);
  let proteins = [];
  let codonToProtein = {
    AUG: "Methionine",
    UUU: "Phenylalanine",
    UUC: "Phenylalanine",
    UUA: "Leucine",
    UUG: "Leucine",
    UCU: "Serine",
    UCC: "Serine",
    UCA: "Serine",
    UCG: "Serine",
    UAU: "Tyrosine",
    UAC: "Tyrosine",
    UGU: "Cysteine",
    UGC: "Cysteine",
    UGG: "Tryptophan",
    UAA: "STOP",
    UAG: "STOP",
    UGA: "STOP",
  };
  for (let codon of codons) {
    if (!codonToProtein[codon]) {
      throw new Error("Invalid codon");
    }
    proteins.push(codonToProtein[codon]);
  }
  if (proteins[0] === "STOP") {
    return [];
  } else {
    if (proteins.includes("STOP")) {
      return proteins.slice(0, proteins.indexOf("STOP"));
    } else {
      return proteins;
    }
  }
};
