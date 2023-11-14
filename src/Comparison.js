const compare =(a , b) =>{
    if(a < b){
        console.log( a , "<" , b);
        return
    }
    if(a > b){
        console.log( a , ">" , b);
        return
    }
    console.log(a , "==" , b);

}
compare(1 , 2);
compare(3 , 1);
compare(3 , 3);