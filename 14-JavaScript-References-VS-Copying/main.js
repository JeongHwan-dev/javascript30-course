// start with strings, numbers and booleans
let age = 100;
let age2 = age;

console.log(age, age2);

age = 200;

console.log(age, age2);

let name = 'Wes';
let name2 = name;

console.log(name, name2);

name = 'wesley';

console.log(name, name2);

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;

console.log(players, team);

// You might think we can just do something like this:
team[3] = 'Lux';

console.log(players, team);

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice();
const team3 = [].concat(players);
const team4 = [...players];
const team5 = Array.from(players);

team2[3] = 'Poppy2';
console.log(players, team2, team3, team4);

team3[3] = 'Poppy3';
console.log(players, team2, team3, team4);

team4[3] = 'Poppy4';
console.log(players, team2, team3, team4);

team5[3] = 'Poppy5';
console.log(players, team2, team3, team4, team5);

// one way

// or create a new array and concat the old one in

// or use the new ES6 Spread

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Wes Bos',
  age: 80,
};

// and think we make a copy:
const captain = person;

captain.age = 99;

console.log(person.age, captain.age);

// how do we take a copy instead?
const cap2 = Object.assign({}, person, { umber: 99, age: 12 });

console.log(person, cap2);

// We will hopefully soon see the object ...spread
const cap3 = { ...person };

cap3.name = 'david';

console.log(person, cap3);

const wes = {
  name: 'Wes',
  age: 100,
  social: {
    twitter: '@wesbos',
    facebook: 'wesbox.developer',
  },
};

console.clear();
console.log(wes);

const dev = Object.assign({}, wes);
const dev2 = JSON.parse(JSON.stringify(wes));

dev.name = 'Wesley';
dev2.name = 'dev2';
console.log(wes, dev);
console.log(wes, dev2);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
