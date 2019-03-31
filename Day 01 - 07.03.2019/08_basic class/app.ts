class Cinema{
   private movieName:string;
   private movieLength:number;

   public constructor(movieName?:string,movieLength?:number){
        this.movieName=movieName;
        this.movieLength=movieLength;
   }

   public getDesc():string{
       return `${this.movieName} is ${this.movieLength} minutes`;
   }
}

let c1:Cinema=new Cinema();
let c2:Cinema=new Cinema("Capten Marvel",120);

console.log(c1.getDesc());  //--> undefined is undefined minutes
console.log(c2.getDesc());  //--> Capten Marvel is 120 minutes