
const array =[1, 4 ,3 ,6 ,2 ,9]
const counts = (array) =>{
return array.reduce((c , item)=>{ 
c[item % 2]++; 
return c;
} , [0 , 0])
}

const c = counts(array);
console.log(c);