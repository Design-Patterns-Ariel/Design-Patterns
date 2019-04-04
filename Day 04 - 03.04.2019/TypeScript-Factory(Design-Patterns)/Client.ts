import {IUser} from "./IUser";
export class Client implements IUser
{
	public static  isValid( name?:string,  password?:string):boolean
	{
		return name==("client") && password==("1234");
				
	}

	
	public getInfo():string
	{
		return "I am a Client";
	}
}

