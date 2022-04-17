function randomCardsNumbers(){
let numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

let randomNumber = Math.floor(Math.random() * numbers.length);  

return numbers[randomNumber];

};
function randomCardsSymbols(){
  let symbols = [ "&spades;", "&hearts;", "&diams;", "&clubs;"];

  let randomSymbol = Math.floor(Math.random() * symbols.length); 
  
  return symbols[randomSymbol];
  
  };
document.querySelector(".number").innerHTML = "randomCardsNumbers()";
document.querySelector("#simbolos").innerHTML = "randomCardsSymbols()";



