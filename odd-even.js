function oddEvenNumber(numbers) {
  const num = [];
  let sum = 0;
  for (const number of numbers) {
    if (number % 2 !== 0) {
      console.log(number);
      num.push(number);
    }
    sum = sum + number;
  }
  console.log('total number : ', sum);

  let lg = num.length;
  console.log('length : ', lg);
  const avarage = sum / lg;
  console.log('avarage of this array is : ', parseInt(avarage));
  return num;
}

const number = [30, 20, 33, 34, 55, 76, 66, 37, 89, 97];
const result = oddEvenNumber(number);
console.log(result);
