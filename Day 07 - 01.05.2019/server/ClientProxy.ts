class ClientProxy implements ICountry{
    getBestCountry(): string {
        fetch("localhost:4000/read").
        then(res=>res.json())
        .then(x=>console.log(x));

        return "done";
    }    
    
    
    setBestCountry(x: string): void {
        fetch("localhost:4000/set/"+x).
        then(res=>res.json())
        .then(x=>console.log(x));

    }


}