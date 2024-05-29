for (let i = 0; i < 10; i++) {
  console.log('incrementing by 1: ', i);
}
// 0 1 2 3 4 5 6 7 8 9

for (let i = 0; i < 10; i += 2) {
  console.log('incrementing by: 2 ', i);
}
// 0 2 4 6 8

for (let i = 10; i > 0; i--) {
  console.log('decrementing by 1: ', i);
}
// 10 9 8 7 6 5 4 3 2 1

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

for (let i = days.length - 1; i >= 0; i--) {
  if (days[i] === 'Saturday' || days[i] === 'Sunday') {
    console.log('weekend days: ', days[i]);
  }
}
// Sunday Saturday

for (let i = 0; i <= days.length - 1; i++) {
  if (days[i] !== 'Saturday' && days[i] !== 'Sunday') {
    console.log('week days: ', days[i]);
  }
}
// Monday Tuesday.... Friday

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    console.log(i + 1, j + 1);
  }
}

const mariemHobbies = ['games', 'watercolour', 'cooking', 'tinkering'];
const franHobbies = ['cats', 'skating', 'reading', 'skincare', 'watercolour'];

const mutualHobbies = [];

for (let i = 0; i < mariemHobbies.length; i++) {
  for (let j = 0; j < franHobbies.length; j++) {
    if (mariemHobbies[i] === franHobbies[j]) {
      mutualHobbies.push(mariemHobbies[i]);
    }
  }
}

console.log(mutualHobbies);
