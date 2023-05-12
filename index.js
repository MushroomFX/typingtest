const articles = ['the', 'a', 'an', 'one', 'some', 'any', 'another', 'few', 'many', 'each', 'every', 'most', 'several', 'no', 'this', 'that', 'these', 'those', 'my', 'your', 'his', 'her', 'its', 'our', 'their', 'either', 'neither', 'both', 'all', 'enough', 'such', 'what', 'which', 'whose', 'whatever', 'whichever', 'whoever', 'whomever', 'half', 'twice', 'once', 'four times', 'five times', 'ten times', 'three-quarters', 'quarter', 'whole', 'double', 'triple', 'single', 'multiple', 'many more', 'many fewer', 'several more', 'several fewer', 'fewer than', 'more than', 'as many as', 'less than', 'none of', 'some of', 'most of', 'all of', 'enough of', 'a lot of', 'a little of', 'lots of', 'plenty of', 'not enough of', 'plenty more', 'plenty less', 'the majority of', 'the rest of', 'the best of', 'the worst of', 'the same'];
const nouns = ['cat', 'dog', 'house', 'car', 'tree', 'book', 'computer', 'guitar', 'painting', 'phone', 'bird', 'chair', 'door', 'table', 'desk', 'lamp', 'pen', 'pencil', 'shoe', 'shirt', 'hat', 'glasses', 'watch', 'ring', 'earrings', 'necklace', 'purse', 'wallet', 'key', 'soap', 'towel', 'toothbrush', 'toothpaste', 'shampoo', 'conditioner', 'razor', 'lotion', 'perfume', 'sweater', 'jacket', 'skirt', 'pants', 'shorts', 'socks', 'underwear', 'gloves', 'scarf', 'umbrella', 'camera', 'television', 'radio', 'newspaper', 'magazine', 'movie', 'song', 'paint', 'sculpture', 'photograph', 'bridge', 'building', 'park', 'beach', 'mountain', 'river', 'lake', 'ocean', 'sky', 'cloud', 'sun', 'moon', 'star', 'planet', 'galaxy', 'universe', 'idea', 'dream', 'thought', 'memory', 'emotion', 'feeling', 'love', 'hate', 'fear', 'joy', 'anger', 'surprise', 'disgust', 'sympathy', 'empathy', 'curiosity', 'hope'];
const verbs = ['ran', 'jumped', 'walked', 'drove', 'ate', 'read', 'typed', 'played', 'painted', 'called','swam', 'flew', 'climbed', 'slept', 'woke', 'showered', 'danced', 'sang', 'listened', 'watched','studied', 'worked', 'wrote', 'spoke', 'laughed', 'cried', 'smiled', 'frowned', 'shouted', 'whispered','brushed', 'combed', 'dressed', 'undressed', 'exercised', 'stretched', 'meditated', 'breathed', 'yawned', 'coughed','cleaned', 'organized', 'cooked', 'baked', 'washed', 'dried', 'ironed', 'folded', 'vacuumed', 'dusted','fixed', 'built', 'assembled', 'installed', 'repaired', 'maintained', 'upgraded', 'replaced', 'changed', 'adjusted','met', 'visited', 'greeted', 'hugged', 'kissed', 'dated', 'married', 'divorced', 'broke up', 'missed','dropped', 'picked up', 'delivered', 'mailed', 'emailed', 'called back', 'texted', 'chatted', 'shared', 'uploaded','learned', 'taught', 'mentored', 'coached', 'advised', 'consulted', 'researched', 'analyzed', 'synthesized', 'evaluated','read', 'watched', 'listened to', 'played', 'created', 'designed', 'built', 'developed', 'tested', 'debugged','borrowed', 'lent', 'returned', 'kept', 'gave', 'received', 'earned', 'spent', 'saved', 'invested'];
const adverbs = ['quickly', 'slowly', 'happily', 'sadly', 'loudly', 'quietly', 'carefully', 'eagerly', 'politely', 'roughly','often', 'never', 'always', 'sometimes', 'rarely', 'frequently', 'constantly', 'occasionally', 'regularly', 'periodically','well', 'badly', 'gracefully', 'awkwardly', 'efficiently', 'inefficiently', 'expertly', 'amateurishly', 'confidently', 'shyly','briefly', 'longingly', 'eventually', 'immediately', 'suddenly', 'gradually', 'simultaneously', 'independently', 'together', 'alone','nearby', 'far away', 'here', 'there', 'everywhere', 'nowhere', 'abroad', 'locally', 'globally', 'nationally','ahead', 'behind', 'upstairs', 'downstairs', 'indoors', 'outdoors', 'upwards', 'downwards', 'eastward', 'westward','likely', 'unlikely', 'certainly', 'possibly', 'maybe', 'definitely', 'absolutely', 'totally', 'completely', 'partially','exactly', 'approximately', 'precisely', 'loosely', 'firmly', 'tightly', 'vaguely', 'clearly', 'distinctly', 'obviously','generally', 'specifically', 'mostly', 'partly', 'largely', 'scarcely', 'barely', 'nearly', 'almost', 'entirely','directly', 'indirectly', 'actively', 'passively', 'positively', 'negatively', 'aggressively', 'peacefully', 'violently'];

var topText = document.getElementsByClassName("text")[0];
var nextText = document.getElementsByClassName("text")[1];
var inputText = document.querySelector("body > textarea");

var wpm = 0;
var wpmTimer = new Date().getTime()
var wpmGraph = [];


function generateSentence() {
  let sentence = '';
  if (Math.random() < 0.3) {
    sentence += articles[Math.floor(Math.random() * articles.length)];
    sentence += ' ' + nouns[Math.floor(Math.random() * nouns.length)];
    sentence += ' ' + verbs[Math.floor(Math.random() * verbs.length)];
    if (Math.random() < 0.5) {
      sentence += ' ' + adverbs[Math.floor(Math.random() * adverbs.length)];
    }
    sentence += 'and';
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
  topText.innerText = capitalizeFirstLetter(removeLeadingSpaces(generateSentence()));
  nextText.innerText = capitalizeFirstLetter(removeLeadingSpaces(generateSentence()));
}

document.addEventListener('keydown', function(event) {
  document.querySelector("body > textarea").focus()
});

addEventListener('input', updateText); 
function updateText(){
  var noDot = !document.querySelector("#noDOt").checked * 1
  if(topText.innerText.slice(0,topText.innerText.length - noDot) ==  inputText.value){
    topText.innerText = nextText.innerText
    nextText.innerText = capitalizeFirstLetter(removeLeadingSpaces(generateSentence()));
    inputText.value = ""



  // Calculate WPM
  const elapsedTime = (new Date().getTime() - wpmTimer) / 1000; // in seconds
  const numWords = topText.innerText.split(" ").length;
  const wpm = Math.round((numWords / elapsedTime) * 60);
  console.log(elapsedTime)


  wpmGraph.push(wpm)
  if(wpmGraph.length>100){
    wpmGraph.shift();
  }

  const sum = wpmGraph.reduce((a, b) => a + b, 0);
  const avg = Math.round(10 * (sum / wpmGraph.length) || 0 ) / 10

  generateGraph(wpmGraph,"wpmGraph")

  document.getElementById("lasWpm").innerText = `Last WPM: ${wpm}`; // Display WPM on the page
  document.getElementById("avgWpm").innerText = `Average WPM: ${avg}`; // Display WPM on the page
  document.getElementById("wpmGraph").innerText = `Last WPM: ${wpmGraph}`; // Display WPM on the page

  // Reset the timer
  wpmTimer = new Date().getTime()
  }
  colorMismatch()
}


function colorMismatch() {
  const inputText = document.querySelector("body > textarea").value;
  const outputText = document.getElementsByClassName("text")[0].innerText;

  let i;
  for (i = 0; i < inputText.length; i++) {
    if (inputText[i] !== outputText[i]) {
      break;
    }
  }

  const coloredText = `<span style="color: red;">${outputText.substring(0, i)}</span>${outputText.substring(i)}`;
  document.getElementsByClassName("text")[0].innerHTML = coloredText;
}


// function generateGraph(arr, canvasID) {
//   const canvas = document.getElementById(canvasID);
//   const context = canvas.getContext('2d');
//   const width = canvas.width;
//   const height = canvas.height;

//   const maxValue = Math.max(...arr);
//   const minValue = Math.min(...arr);

//   const xStep = width / (arr.length - 1);
//   const yRange = maxValue - minValue;
//   const yStep = height / yRange;

//   // Clear the canvas
//   context.clearRect(0, 0, width, height);

//   context.beginPath();
//   context.moveTo(0, height - ((arr[0] - minValue) * yStep));

//   for (let i = 1; i < arr.length; i++) {
//     const x = i * xStep;
//     const y = height - ((arr[i] - minValue) * yStep);
//     context.lineTo(x, y);
//   }

//   context.strokeStyle = 'blue';
//   context.lineWidth = 2;
//   context.stroke();
// }

function generateGraph(arr, canvasID) {
  const canvas = document.getElementById(canvasID);
  const context = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;

  const maxValue = Math.max(...arr);
  const minValue = Math.min(...arr);

  const xStep = width / (arr.length - 1);
  const yRange = maxValue - minValue;
  const yStep = height / yRange;

  // Clear the canvas
  context.clearRect(0, 0, width, height);
  context.fillStyle = "gray";
  context.fillRect(0, 0, width, height);

  context.beginPath();
  context.moveTo(0, height - ((arr[0] - minValue) * yStep));

  for (let i = 1; i < arr.length; i++) {
    const x = i * xStep;
    const y = height - ((arr[i] - minValue) * yStep);
    context.lineTo(x, y);
  }

  context.strokeStyle = 'blue';
  context.lineWidth = 2;
  context.stroke();

  // Draw minimum and maximum indicators
  context.fillStyle = 'white';
  context.font = '12px Arial';
  context.fillText(minValue.toFixed(2), 5, height - 5);
  context.fillText(maxValue.toFixed(2), 5, 15);
}