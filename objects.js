'use strict';

// 1. countWords
function countWords(phrase) {
  const phraseArr = phrase.split(' ');
  const wordCount = {}
  for(const word of phraseArr) {
    if(wordCount.hasOwnProperty(word)) {
      wordCount[word] += 1
    }
    else 
      wordCount[word] = 1
  }
  return wordCount
}
//console.log(countWords("Hello World, We are learning Javascript and Javascript"))
// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  const melonPrices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
  }
  
  if (!melonPrices.hasOwnProperty(price)) {
    return
  }
  
  return melonPrices[price].sort()
}

console.log(getMelonsAtPrice(3.25))