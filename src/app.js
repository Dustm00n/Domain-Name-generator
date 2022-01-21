/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { WatchIgnorePlugin } from "webpack";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let dominio = [".com", ".net", ".us", ".io"];



let pronounindx = Math.floor(Math.random() * pronoun.length);
let adjindx = Math.floor(Math.random() * adj.length);
let nounindx = Math.floor(Math.random() * noun.length);
let dominioindx = Math.floor(Math.random() * dominio.length);

return pronoun[pronounindx] +" "+ adj[adjindx] +" "+ noun[nounindx] +" "+dominio[dominioindx];
};