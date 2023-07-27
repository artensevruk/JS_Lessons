function map (array , callback){
  const a = []; 
  for(let i = 0; i<array.length; i++ ){
   a.push(callback(array[i]));
  }
  return a
}

const array = [1 , 4 , 6];
console.log(map(array , (i) => i*2 ));