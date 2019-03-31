//access modifier cannot appear on a type member in interface
interface IFly{
    speed?:number;  // opional to implement this property - because the "?"
    startFly():void;
}

class Baloon implements IFly{
    name:string;
    startFly(): void {
        console.log("I am flying");
    }  
}

let x:IFly=new Baloon();
x.startFly();  //--> I am flying


// check if variable is instanceof a class
if(x instanceof Baloon){
    console.log("I am a baloon");
}


// 2 ways for down casting
let b1:Baloon=<Baloon>x;
let b2:Baloon=x as Baloon;