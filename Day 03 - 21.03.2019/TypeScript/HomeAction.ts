export abstract class  HomeAction{
	
	public CloseTheDoor(action?:boolean):String{
		if(action)
			return "The door is Closed";
		else
			return "The door is Open";
	}
	
	public CloseTheAir(action?:boolean):String{
		if (action)
			return "The air is Closed";
		else
			return "The air is Open";
	}

	public CloseTheLight(action?:boolean):String{
		if (action)
			return "The light is Closed";
		else
			return "The light is Open";
	}

	public TeethBrushing(action?:boolean):String{
		if (action)
			return "I brushed my teeth"
		else
			return "I did not brush my teeth"
		}

	public OrganizationToExit(action?:boolean):String{
		if (action)
			return "An organized case"
		else
			return "An unorganized file"
		}

}
