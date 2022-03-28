function isPrime(number){
 // listing down all the numbers between 2 and itself
  for (var i = 2; i < number; i++){
  // Check if the number is divisible by i, if it is divisible by i
  // it is not a prime number
if (number % i == 0){
  return false;
  }
}
   // Check if the number is not divisible by i, if it is divisible by i
  // it is a prime number
return true;
}
 for (var i = 2; i < 1001; i++){
   if (isPrime(i)){
     console.log(i);
   }
 }
