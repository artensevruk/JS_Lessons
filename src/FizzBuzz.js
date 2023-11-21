// const printArgs = ( a  , b , c ) => {
//     console.log(a , b , c)
// } ;

// printArgs(10 , 10 , 30);
// printArgs(10);
// printArgs(10 , 10 );

const fizzBazz = (a) => {
  if (a % 3 == 0 && a % 5 == 0) {
    console.log("Fizz Bazz");
    return
  }

   if (a % 5 == 0) {
    console.log("Bazz");
    return
  } 

  if (a % 3 == 0) {
    console.log("Fizz");
    return
  }

    console.log(a);
  
};
fizzBazz(3);
fizzBazz(5);
fizzBazz(15);
fizzBazz(2);

// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/artensevruk/JS_Lessons.git
// git push -u origin main