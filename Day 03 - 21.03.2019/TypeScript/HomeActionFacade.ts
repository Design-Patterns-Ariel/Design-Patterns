import {HomeAction} from "./HomeAction";
export class HomeActionFacade extends HomeAction{

	private constructor(){ super()}

    private static instance:HomeActionFacade=new HomeActionFacade();

    public static getInstance():HomeActionFacade{
        return HomeActionFacade.instance;
    }
	
	public Sleep(){  
		
		console.log("\n\n---------------------------------------")
		console.log("You have selected Sleep mode")
		console.log("---------------------------------------")
		console.log(this.CloseTheLight(true))
		console.log(this.TeethBrushing(true))
		console.log(this.CloseTheDoor(false))
		console.log("---------------------------------------\n\n")
	}

	public ExitTheHouse(){
		console.log("---------------------------------------")
		console.log("You have selected Exit mode from home")
		console.log("---------------------------------------")
		console.log(this.CloseTheDoor(false))
		console.log(this.CloseTheAir(true))
		console.log(this.CloseTheLight(false))
		console.log(this.OrganizationToExit(true))
		console.log("---------------------------------------\n\n")
	}
    


}

