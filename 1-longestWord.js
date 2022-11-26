function findLongestWord (str) {

  let wordsArray = str.split(' ')

  let longestWordLength = 0;

  for (let i = 0; i < wordsArray.length; i++) {
    
    if (wordsArray[i].length > longestWordLength) {
      longestWordLength = wordsArray[i].length
    }

  }
  
  return wordsArray.find(element => element.length === longestWordLength)

}

let str = 'What is the average airspeed velocity of an unladen swallow'



console.log(findLongestWord(str))