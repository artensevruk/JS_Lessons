
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
    if(x1 < x2 && y1 > y2){
        console.log("отрезки пересекаются");
        return
    }
    console.log("Отрезки не пересекаются");
}
LineSegment(4 , 5 , 1 ,6);
LineSegment(3 , 3 , 4, 6);
LineSegment(2 , 3 , 1, 5);

// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/artensevruk/line.git
// git push -u origin main