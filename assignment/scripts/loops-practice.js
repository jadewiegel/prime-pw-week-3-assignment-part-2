console.log('****** Loops Practice *******');


// // 1. 'for' loop
// console.log('---- 1. For loops ----');
// // Example: a for loop to console.log numbers from 0 to 3
// console.log('count from 0 to 3');
// // start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
// for (let i=0; i<4; i++) {  
//   console.log(i);
// }

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this?
for( i=0; i<6; i++){
  console.log('count from 0 to 5', i);
}

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
let num = [1, 2, 3, 4, 5];

for (i=0; i<num.length; i++) {
  if(num[i] >= 3)
  console.log('count from 3 to 5', i+1);
}

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let even = [];

for(i=0; i<nums.length; i++) {
  let numbers=nums[i];
  if (numbers % 2 === 0) {
    even.push(numbers);
  }
}
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):', even);

// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
for (i=5; i>=0; i--) {
  
  console.log('STRETCH: countdown from 5 to 0', i);
}


// 2. For of loops  
//console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
for( list of stars ){
  console.log('Some stars:', list);
}

// 3. While loops  
//console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
let index = 0;
while( index < stars.length) {
  let lists = stars[index];
  console.log('Some stars using while:', lists);
  index++;
}

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
let count = 0;
let max = 5;
while( count <= max ){
  console.log('count from 0 to 5', count);
  count++;
}

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
let countdown = 10
while( countdown >= 5 ){
  console.log('count backwards from 10 to 5', countdown);
  countdown--;
}
