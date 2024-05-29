let globalVar = 'good bye';

function localScope() {
  let localVar = 'hello';
}

console.log(globalVar);
console.log(localVar); // ReferenceError: localVar is not defined
// it is because localVar is accessible only in the scope of the localScope fn
