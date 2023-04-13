const styles = ["Джаз" , "Блюз"];
styles.push("Рок-н-ролл");
// const middle_array =() =>{
//     for(let i = 0 ; i != styles.length ; i ++){
//         console.log(styles[i])

//     }
// }
const length = styles.length;

const middleIndex = Math.floor(length / 2);

console.log(middleIndex);

console.log(middleIndex + " " + "Центр");
console.log(styles[middleIndex] + " " +  "Центральный элемент" );
styles[middleIndex] = "Классика";
console.log(styles);
// middle_array();
console.log(styles[0] + " " + " - удаляем этот элемент")
let delet = styles.shift()
console.log(delet);
console.log(styles)
styles.unshift("Рэп" , "Регги");
console.log(styles)