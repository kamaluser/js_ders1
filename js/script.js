// * 1. Verilmiş ədədlır siyahısındaki ədədlərin cəmini tapın qaytaran function


// function calcSum(nums){
//     let sum = 0;
//     for(let i = 0; i < nums.length; i++){
//         sum += nums[i];
//     }
//     return sum;
// }

// const arr = [1,2,3,4,5,9];
// let a = calcSum(arr);
// console.log(a);


// * 2. Verilmiş arraydəki ən böyük ədədi tapın qaytaran function

// * 2.1

// const arr = [11,12,3,44,53,87,43,65,98,12,21];

// let enBoyuk = arr.reduce(maxNumber, -Infinity)

// function maxNumber(start, value){
//     if(value>start){
//         return value;
//     }
//     else return start;
// }

// console.log(enBoyuk)


// * 2.2

// function maxNumber(arr){
//     let maxNumber = arr[0];
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] > maxNumber){
//             maxNumber = arr[i];
//         }
//     }
//     return maxNumber;
// }

// const arr = [111,12,3,44,53,87,43,65,108,12,21];

// let a = maxNumber(arr);
// console.log(a);


// * 3. Verilmiş ədədin rəqəmləri cəmini tapıb qaytaran function

// * 3.1

// function sumOfDigits(number){
//     let sum = 0;
//     let strNumber = number.toString();

//     for(let i = 0; i < strNumber.length; i++){
//         sum+=+strNumber[i];
//     }
//     return  sum;
// }

// let result = sumOfDigits(234);
// console.log(result);


// * 3.2


// function sumOfDigits(number){
//     let sum = 0;
//     while (number > 0) {
//         sum += number % 10;
//         number = Math.floor(number / 10);
//     }
//     return sum;
// }

// let result = sumOfDigits(834);
// console.log(result);


// * 4. Verilmiş ədədlər siyahısındaki ən çox təkrarlanan ədədi tapıb qaytaran function

