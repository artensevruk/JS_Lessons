
/* 
a1         b1
- - - - - -

a2         b2  
- - - - - -           
*/

const  LineSegment =(x1 ,y1 ,x2 ,y2) =>{
    if(x1 > x2 && y1 < y2){
        console.log("отрезки пересекаются");
        return
    } 
    if(x1 > x2 && y1 < y2){
        console.log("отрезки пересекаются");
        return
    }
    if(x1 < x2 && y1 > y2){
        console.log("отрезки пересекаются");
        return
    }
    
    console.log("Отрезки не пересекаются");
}
LineSegment(4 , 5 , 1 ,6);
LineSegment(3 , 3 , 4, 6);
LineSegment(1, 5, 3, 6);

