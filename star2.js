
const printPyramid =(n) =>{
for( let i = 0 ; i < n ; i++ ){
    for( let j = -1 ; j < i ; j++ ){
        process.stdout.write("*");
    }
process.stdout.write("\n")
}
}
printPyramid(5);