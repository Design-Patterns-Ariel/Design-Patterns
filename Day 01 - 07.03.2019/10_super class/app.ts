class A{
    public constructor(){
        console.log("I am in the A ctor");
    }
}

class B extends A{
    public constructor(){
        super();
        console.log("I am in the B ctor");
    }
}

let myB:A=new B();

/*
I am in the A ctor
I am in the B ctor
*/