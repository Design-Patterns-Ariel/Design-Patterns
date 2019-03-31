//variable 'x1' implicitly has an 'number' type
//because we assigned a value in the declaration line
let x1 = 4;


//variable 'x2' implicitly has an 'any' type,
//but a better type may be inferred from usage
let x2;
x2 = 6;
x2 = "a";


let x3: any = 4;
x3 = "a";
