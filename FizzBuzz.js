// const printArgs = ( a  , b , c ) => {
//     console.log(a , b , c)
// } ;

// printArgs(10 , 10 , 30);
// printArgs(10);
// printArgs(10 , 10 );

const getFizzBazz = (a) => {
  if (a % 3 == 0 && a % 5 == 0) {
   
    return "Fizz Buzz"; 
  }

   if (a % 5 == 0) {
   return "Fizz" ;
  } 

  if (a % 3 == 0) {
    
    return "Buzz";
  }
return a;
  
  
};


const fizzBazz =(n) =>{
for( let i=0 ; n > i ; i++){
  getFizzBazz(i);
  let resut = getFizzBazz(i);
  console.log(resut);
}

}
fizzBazz(12);







