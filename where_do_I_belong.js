function getIndexToIns(arr, num) {
    var sortedArr = []; 
    sortedArr = arr.sort((a, b) => a - b); 
    // console.log(sortedArr); 
    var newArr = []; 
    for (var i = 0; i < sortedArr.length; i++) {
      var item = sortedArr[i]; 
      if(item < num){
        newArr.push(item); 
        // console.log(newArr);
      } 
    }
    newArr.push(num)
    return newArr.indexOf(num);
  }
  
  
  console.log(getIndexToIns([1, 20, 2, 40, 60], 50));