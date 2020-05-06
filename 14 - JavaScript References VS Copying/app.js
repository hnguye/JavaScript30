// start with strings, numbers and booleans
// Numbers are cloned
// Strings are cloned
// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// and we want to make a copy of it.
const team = players;
// Arrays are referenced
// You might think we can just do something like this:

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice();

// one way

// or create a new array and concat the old one in
const team3 = [].concat(players);
// or use the new ES6 Spread
const team4 = [...players];
// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: "Wes Bos",
    age: 80,
};

// and think we make a copy:

// how do we take a copy instead?

// We will hopefully soon see the object ...spread

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
