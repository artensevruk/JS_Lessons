const sumInput =() =>{
    let sumInput =[];
    let input
    while(true){
      input = prompt();
      if( input != +input  ){
        break; 
      } 
      sumInput.push(+input);
      }
      let sum = 0;

      for (const i  of sumInput) {
        console.log(i);
        sum = sum + i;
        }

    window.alert(sum);
}
   
sumInput();
