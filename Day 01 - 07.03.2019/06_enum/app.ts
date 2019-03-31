enum Color{
    RED,
    GREEN,
    BLUE
}

let c1:Color=Color.BLUE;
console.log(Color[c1]); //--> BLUE

let c2:Color=0;
console.log(Color[c2]); //--> RED