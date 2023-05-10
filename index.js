const articles = ['the', 'a', 'an'];
const nouns = ['cat', 'dog', 'house', 'car', 'tree', 'book', 'computer', 'guitar', 'painting', 'phone'];
const verbs = ['ran', 'jumped', 'walked', 'drove', 'ate', 'read', 'typed', 'played', 'painted', 'called'];
const adverbs = ['quickly', 'slowly', 'happily', 'sadly', 'loudly', 'quietly', 'carefully', 'eagerly', 'politely', 'roughly'];

function generateSentence() {
  let sentence = '';
  if (Math.random() < 0.3) {
    sentence += articles[Math.floor(Math.random() * articles.length)];
    sentence += ' ' + nouns[Math.floor(Math.random() * nouns.length)];
    sentence += ' ' + verbs[Math.floor(Math.random() * verbs.length)];
    if (Math.random() < 0.5) {
      sentence += ' ' + adverbs[Math.floor(Math.random() * adverbs.length)];
    }
    sentence += ' and';
  }
  sentence += ' ' + articles[Math.floor(Math.random() * articles.length)];
  sentence += ' ' + nouns[Math.floor(Math.random() * nouns.length)];
  sentence += ' ' + verbs[Math.floor(Math.random() * verbs.length)];
  if (Math.random() < 0.5) {
    sentence += ' ' + adverbs[Math.floor(Math.random() * adverbs.length)];
  }
  sentence += '.';
  return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}


// functions for formating
function capitalizeFirstLetter(sentence) {
  return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}

function removeLeadingSpaces(str) {
  return str.replace(/^\s+/, '');
}


for (let i = 0; i < 10; i++) {
  console.log(capitalizeFirstLetter(removeLeadingSpaces(generateSentence())));
}


function setUp(){
  document.getElementsByClassName("text")[0].innerText = capitalizeFirstLetter(removeLeadingSpaces(generateSentence()));
  document.getElementsByClassName("text")[1].innerText = capitalizeFirstLetter(removeLeadingSpaces(generateSentence()));
}

var refreshLoop = setInterval(function(){
  if(document.querySelector("body > textarea").value == document.querySelector("#displaytexts > div:nth-child(1)").innerHTML){
    document.getElementsByClassName("text")[0].innerText = document.getElementsByClassName("text")[1].innerText
    document.getElementsByClassName("text")[1].innerText = capitalizeFirstLetter(removeLeadingSpaces(generateSentence()));
    document.querySelector("body > textarea").value = ""
  }
},100)