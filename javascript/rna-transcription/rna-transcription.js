export const toRna = (dna) =>
  dna.split("").map(translate).join("");

const translate = (c) => {
  switch (c) {
    case 'C': return 'G'
    case 'G': return 'C'
    case 'T': return 'A'
    case 'A': return 'U'
  }
}