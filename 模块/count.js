const counter = (arr) => {
  return `There are ${arr.length} elements in the array`
}
const adder = (a,b) => {
  return a+b
}
const num = 3.1415926
// exports.counter = counter
// exports.adder = adder
// exports.num = num

module.exports = {
  counter,adder,num
}