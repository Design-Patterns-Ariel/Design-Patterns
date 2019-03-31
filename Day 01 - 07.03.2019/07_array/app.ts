// arr1 and arr2 are the same - but 2 ways of defenition
let arr1:number[]=[1,2,3];
let arr2:Array<number>=new Array<number>(1,2,3);


// mat1 and mat2 are the same - but 2 ways of defenition
let mat1:number[][]=[ [1,2,3] , [1,2,3] ];
let mat2:Array<Array<number>>=new Array<Array<number>>(
    new Array<number>(1,2,3),
    new Array<number>(1,2,3)
);