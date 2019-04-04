import {IUser} from "./IUser";

export class Admin implements IUser{

	public static isValid(name?:string,password?:string):boolean
	{
		return name == ("admin") && password==("1234");
	}


	public getInfo():string
	{
		return "I am an Admin";
	}

}


