import { counter , headerList , list , input , toDoApp} from "./components.js";

const colors = ["red", "green", "blue"];

const fruits = ["apple", "banana" , "Cherry"];

document.body.append(
list(colors),
list(fruits),
headerList("numbers" , [1 , 2 , 2]),

//----------------------------------

counter(2),
counter(),
input(),
toDoApp()
);





