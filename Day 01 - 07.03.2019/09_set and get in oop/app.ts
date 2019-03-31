class Person{
    private _age:number;

    public set age(val:number){
        this._age=(val>120 || val < 0)?0 : val;
    }

    public get age():number{
        return this._age;
    }
}

let bob:Person=new Person;
bob.age=4;              // here we call the set
console.log(bob.age);   // here we cal the get