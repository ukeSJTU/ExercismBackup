//
// This is only a SKELETON file for the 'Nucleotide Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function countNucleotides(strand) {
  const counts = {'A': 0, 'C': 0, 'G': 0, 'T': 0};

  for (const nucleotide of strand) {
    if (nucleotide in counts) {
      counts[nucleotide] += 1;
    } else {
      throw new Error('Invalid nucleotide in strand');
    }
  }

  return `${counts.A} ${counts.C} ${counts.G} ${counts.T}`;
}
