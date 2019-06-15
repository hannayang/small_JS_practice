// function mutation(arr) {
//     let firstWordSubArray = arr[0].toLowerCase().split(""); 
//     console.log(firstWordSubArray);
//     let secondWordSubArray= arr[1].toLowerCase().split("");
//     console.log(secondWordSubArray);
//     for (let i = 0; i < secondWordSubArray.length; i++) {
//           if(firstWordSubArray.indexOf(secondWordSubArray[i]) === -1) {
//               return false; 
//           }
//     }  return true; 
// }


function mutation(arr) {
    var test = arr[1].toLowerCase();
    console.log(test); 
    var target = arr[0].toLowerCase();
    console.log(target); 
    for (var i=0;i<test.length;i++) {
      if (target.indexOf(test[i]) < 0)
        return false;
    }
    return true;
   }
  

console.log(mutation(["Alien", "OPP"]));

