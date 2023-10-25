
var myFriendsAge =[11, 13, 15, 56, 40, 70, 100];
console.log(myFriendsAge);

var myFriendsQuantity = myFriendsAge.length;

console.log(myFriendsQuantity);


function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
  const myArray = [1, 2, 3, 4, 5];
  const result = sumArray(myFriendsAge);
  console.log(result / myFriendsAge.length); // Output: 15

  var avarageAge = result / myFriendsAge.length;

  avarageAge = avarageAge.toFixed(2);

  avarageAge = parseFloat(avarageAge);

  console.log(avarageAge);




