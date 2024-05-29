// 3. Exercise: Weather Forecast Decision Maker:
// ● Description: Write a function forecastDecision() that takes two
// parameters: temperature (number) and isSunny (boolean).
// ● If the temperature is above 25 degrees Celsius and it's sunny,
// recommend going to the beach; if it's above 25 degrees but not
// sunny, recommend having a picnic; otherwise, recommend
// staying indoors.
// ● Implement this function twice:
// ○ Once using if-else statements.
// ○ Once using nested ternary operators.
// ● Which method do you prefer?

const forecastDecision = (temperature, isSunny) => {
  if (typeof temperature !== 'number' || typeof isSunny !== 'boolean') {
    return 'Temperature should be a number and isSunny a boolean value';
  }
  // if (temperature > 25 && isSunny) {
  //     return 'Go to the beach'
  //   } else if (temperature > 25 && !isSunny) {
  //     return 'Have a picnic'
  //   } else {
  //     return 'Stay indoor'
  //   }

  return temperature > 25 && isSunny
    ? 'Go to the beach'
    : temperature > 25 && !isSunny
    ? 'Have a picnic'
    : 'Stay indoor';
};

console.log('Task 3: ', forecastDecision('one', 3));
console.log('Task 3: ', forecastDecision(true, 'false'));
console.log('Task 3: ', forecastDecision(24, true));
console.log('Task 3: ', forecastDecision(24, false));
console.log('Task 3: ', forecastDecision(26, true));
console.log('Task 3: ', forecastDecision(26, false));

// 4. Exercise: Meal Time Decision Maker:
// ● Description: Create a function mealDecision() that takes a
// parameter mealTime (string).
// ● Recommend a meal based on the time of day: breakfast in the
// morning, lunch in the afternoon, and dinner in the evening.
// ● Implement this function twice:
// ○ Once using if-else statements.
// ○ Once using nested ternary operators.
// ● Which one do you prefer?

const mealDecision = (mealTime) => {
  if (typeof mealTime !== 'string') {
    return 'MealTime should be a string' 
  }

  let validMealTime = mealTime.toLowerCase()
  let message 

  if (typeof validMealTime === 'string' && validMealTime === 'morning') {
   message = 'Have breakfast'
  } else if (validMealTime === 'afternoon') {
    message = 'Have lunch'
  } else if (validMealTime === 'evening') {
    message = 'Have dinner'
  } else {
    message = 'Mealtime should be morning, afternoon, or evening'
  }

  return message
}

console.log('Task 4: ', mealDecision(1));
console.log('Task 4: ', mealDecision(true));
console.log('Task 4: ', mealDecision('hi'));
console.log('Task 4: ', mealDecision('Morning'));
console.log('Task 4: ', mealDecision('MORNING'));
console.log('Task 4: ', mealDecision('morning'));
console.log('Task 4: ', mealDecision('afternoon'));
console.log('Task 4: ', mealDecision('evening'));

// Exercise: Default Product Category
// ● Description:Write a function recommendProductCategory() that
// takes a parameter category (string). Add a default category
// “General”
// ● Implement this function twice:
// ○ Once using the Logical OR operator.
// ○ Once using the Nullish Coalescing Operator.
// ● Experiment with calling the functions with different parameters
// and observe the different outputs. Try out: a specific category,
// null, undefined, “”, 0, and no category (no input).
// ● What is the difference between these functions?

const recommendProductCategory = (category) => {
  let categoryInput = category || 'General'
  
}

