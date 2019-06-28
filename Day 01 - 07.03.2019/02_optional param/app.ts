//-------------Default param--------------
function func(num1:number=8,num2:number=5):number{
   return num1+num2;
}
console.log(func(1));     //--> num1=1 num2=5
console.log(func(1,1));   //--> num1=1 num2=1
console.log(func());      //--> num1=8 num2=5


//-------------optional param--------------
function func(num1?:number,num2?:number):void{
   console.log(num1,num2);
}
console.log(func());      //--> num1=undefined num2=undefined
console.log(func(1,1));   //--> num1=1 num2=1
console.log(func(1));     //--> num1=1 num2=undefined