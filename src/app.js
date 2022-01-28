let pronoun = ["the", "our", "this"];
let adj = ["great", "big", "Gerbo"];
let noun = ["jogger", "racoon", "hello"];
let domain = [".com", ".net", ".us", ".io"];

for (let a = 0; a < pronoun.length; a++) {
  for (let b = 0; b < adj.length; b++) {
    for (let c = 0; c < noun.length; c++) {
      for (let d = 0; d < domain.length; d++) {
        console.log(pronoun[a] + adj[b] + noum[c] + domain[d]);
      }
    }
  }
}
