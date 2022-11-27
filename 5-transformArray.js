let arr = [1, 2, [3, 4, [5]]];


function convertArray (arr) {

  let newArr = []

  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      newArr.push(arr[i])
    } else {
      newArr = newArr.concat(convertArray(arr[i]))
    }
  }

  return newArr;

}



console.log(convertArray(arr))