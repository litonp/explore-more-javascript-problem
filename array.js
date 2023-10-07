const country = 'Bangladesh';
const age = 53;
const isIndependent = true;
const student = { id: 121, class: 12, name: 'Agun' };
const friends = [20, 21, 22, 23, 24, 25, 26];

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
// check array using Array.isArray
console.log(Array.isArray(friends));

//------------------
console.log(friends.includes(20));

// concat
const newFriends = [15, 16, 17, 18, 19];
const allFriends = newFriends.concat(friends);
console.log(allFriends);