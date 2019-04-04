import {IUser} from "./IUser";

export class Cashier implements IUser
{
	public static isValid( name?:string,  password?:String):boolean
	{
		return name==("cash") &&password==("1234");
				
	}

	
	public getInfo():string
	{
		return "I am a Cashier";
	}
}

