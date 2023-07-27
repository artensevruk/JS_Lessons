const letters = "adffffdvdsdf";
const array = letters.split("");

const c = (array) => {
return array.reduce((object , letter) => {
const value = object[letter] || 0;
object[letter] = value + 1;

  // if(object[letter]){
  //  object[letter]++;
  // }
  // else{
  //   object[letter] = 1;
  // }
  return object;
}, {} )
}

const d = c(array);
console.log(d);