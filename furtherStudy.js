'use strict';

function wordsInCommon(words1, words2) {
  // Replace this with your code
  const words1Set = new Set(words1);
  const words2Set = new Set(words2);
  const resultSet = new Set();
  
  for(const word of words1Set) {
    if(words2Set.has(word)) {
        resultSet.add(word)
    }
  }
  return Array.from(resultSet)
}
//console.log(wordsInCommon(["apple","berry","cherry","apple"],["berry","cherry","blueberry"]))


function kidsGame(names) {
  const result = [names.shift()];
  const wordsByChar = {};

  for (const name of names) {
    if (!wordsByChar.hasOwnProperty(name[0])) {
      wordsByChar[name[0]] = [name];
    }
    else {
      wordsByChar[name[0]].push(name)
    }
  }

  while (true) {
    //console.log(result)
    let word = result[result.length - 1];
    let startChar = word[word.length - 1];

    if (!wordsByChar.hasOwnProperty(startChar) || wordsByChar[startChar].length === 0) {
      break;
    }
    word = wordsByChar[startChar].shift()
    result.push(word)
  }

  return result
}

console.log(kidsGame(["bagon", "baltoy", "yamask", "starly", "nosepass", "kalob", "nicky", "booger"]))


