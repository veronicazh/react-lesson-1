const arr = [ 73, 45, 32.3, 96, 73, 121, 645, 32.3 ];

const filteredArr = arr.reduce((total, item) => {
  return total.includes(item) ? total : [...total, item]
}, [])

console.log(filteredArr)

