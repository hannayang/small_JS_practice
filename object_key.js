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
  // change code below this line
  let arr = []; 
  for (let key in users) {
    arr.push(key);
  }
  return arr; 
  // change code above this line
}

console.log(getArrayOfUsers(users));