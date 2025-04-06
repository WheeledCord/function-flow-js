// TODO: Write a function 'totalScores' that takes an array of numbers
// TODO: Return the sum of all numbers in the array

const pablo = [10, 10, 2, 6000, 4];


function totalScores(scores) {
  let total = 0;
  for (let score of scores) {
    total += score;
  };
  return total
}
console.log(totalScores(pablo));


module.exports = { totalScores };
