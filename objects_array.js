let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // create a variable initied as an empty list
  // for each key of the object, push the key into the list
  // return that variable 
  var key = []; 
  for (let user in users) {
    console.log(user);
    key.push(user);
  }
  return key; 
}

console.log(getArrayOfUsers(users));


