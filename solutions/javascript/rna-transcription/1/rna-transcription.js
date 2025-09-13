//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (rnaSeq) => {
  let rnaComplementSeq = "";
  for (let nucleotide of rnaSeq) {
    switch (nucleotide) {
      case "G":
        rnaComplementSeq += "C";
        break;
      case "C":
        rnaComplementSeq += "G";
        break;
      case "T":
        rnaComplementSeq += "A";
        break;
      case "A":
        rnaComplementSeq += "U";
        break;
    }
  }
  return rnaComplementSeq;
};
