
// task 1

function compact(arr) {
  const filtArr = new Set(arr);
  const shortArr = Array.from(filtArr);
  return shortArr;
}

const arr = [5, 3, 4, 5, 6, 7, 3];
const arr2 = compact(arr)
console.log(arr2)

// task 2

function createArray(start, end) {
  const array = [];
  for (let i = start; i <= end; i++) {
    array.push(i);
  }
  return array;
}
let arr = createArray(2, 9)
console.log(arr)

// task 3

function calc(a, b) {
  for (let x = a; x <= b; x++) {
    for (let y = a; y <= x; y++) {
      console.log(x)
    }
  }
}

calc(2, 8)

// task 4

function randArray(k) {
  let arr = [];
  for (let i = 0; i < k; i++) {
    let randomNumber = Math.floor(Math.random() * 500) + 1;
    arr.push(randomNumber);
  }
  return arr
}

console.log(randArray(5));

// task 5

let arr = [5, 'Limit', 12, 'a', '3', 99, 2, [2, 4, 3, '33', 'a', 'text'], 'strong', 'broun'];

function arrFilter(arr) {
  let numbers = arr.filter(function (element) {
    return typeof element === 'number'
  });
  let string = arr.filter(function (element) {
    return typeof element === 'string'
  });

  return {
    numbers: numbers,
    string: string
  };
}

let newArr = arrFilter(arr);
console.log(newArr)

// task 8

function greetings() {
  let currentHour = new Date().getHours();
  let greeting;
  switch (true) {
    case (currentHour >= 23 || currentHour > 5):
      greeting = 'Доброї ночі';
      break;
    case (currentHour >= 5 || currentHour > 11):
      greeting = 'Доброго ранку';
      break;
    case (currentHour >= 11 || currentHour > 17):
      greeting = 'Доброго дня';
      break;
    case (currentHour >= 17 || currentHour > 23):
      greeting = 'Доброго вечора'
      break;
  }
  console.log(greeting)
}

greetings()
