
'use strict';

/*
  A: ["GCT", "GCC", "GCA"],
  C: ["TGT", "TGC"],
  D: ["GAT", "GAC"],
  E: ["GAA", "GAG"],
  F: ["TTT", "TTC"],
  G: ["GGT", "GGC", "GGA", "GGG"],
  H: ["CAT", "CAC"],
  I: ["ATT", "ATC", "ATA"],
  K: ["AAA", "AAG"],
  L: ["CTT", "CTC", "CTA", "CTG", "TTA", "TTG"],
  M: ["ATG"],
  N: ["AAT", "AAC"],
  P: ["CCT", "CCC", "CCA", "CCG"],
  Q: ["CAA", "CAG"],
  R: ["CGT", "CGC", "CGA", "CGG", "AGA", "AGG"],
  S: ["TCT", "TCC", "TCA", "TCG", "AGT", "AGC"],
  T: ["ACT", "ACC", "ACA", "ACG"],
  V: ["GTT", "GTC", "GTA", "GTG"],
  W: ["TGG"],
  Y: ["TAT", "TAC"],

  '*': ["TAG","TAA","TGA"]  // stop codon
*/


export const codings = {

  GCT: "A",
  GCC: "A",
  GCA: "A",

  TGT: "C",
  TGC: "C",

  GAT: "D",
  GAC: "D",

  GAA: "E",
  GAG: "E",

  TTT: "F",
  TTC: "F",

  GGT: "G",
  GGC: "G",
  GGA: "G",
  GGG: "G",

  CAT: "H",
  CAC: "H",

  ATT: "I",
  ATC: "I",
  ATA: "I",

  AAA: "K",
  AAG: "K",

  CTT: "L",
  CTC: "L",
  CTA: "L",
  CTG: "L",
  TTA: "L",
  TTG: "L",

  ATG: "M",

  AAT: "N",
  AAC: "N",

  CCT: "P",
  CCC: "P",
  CCA: "P",
  CCG: "P",

  CAA: "Q",
  CAG: "Q",

  CGT: "R",
  CGC: "R",
  CGA: "R",
  CGG: "R",
  AGA: "R",
  AGG: "R",

  TCT: "S",
  TCC: "S",
  TCA: "S",
  TCG: "S",
  AGT: "S",
  AGC: "S",

  ACT: "T",
  ACC: "T",
  ACA: "T",
  ACG: "T",

  GTT: "V",
  GTC: "V",
  GTA: "V",
  GTG: "V",

  TGG: "W",

  TAT: "Y",
  TAC: "Y",

  TAG: "*",
  TAA: "*",
  TGA: "*"

};





var decodings = {};
Object.keys(codings).map(
  key =>
    decodings[codings[key]] =
      []
      .concat(decodings[codings[key]], key)
      .filter(x => x !== undefined)
);

export decodings;
console.log(decodings);





export function translate(Seq) {   // eats a codon sequence, poops an amino acid sequence
  // assert seq.length % 3 === 0
  Seq.match(/.{1,3}/g).map(codon => codings[codon] || "?").join('');
}

// dna sequence // codons
// amino acid sequence