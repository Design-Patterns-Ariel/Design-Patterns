import {Cashier} from "./Cashier";
import {Admin} from "./Admin";
import {Client} from "./Client";
import { IUser } from "./IUser";

export class UserFactory
{
	public static login(name:string,password:string):IUser
	{
		if (Admin.isValid(name, password))
			return new Admin();
		if (Cashier.isValid(name, password))
			return new Cashier();
		if (Client.isValid(name, password))
			return new Client();

		return null;
	}
}

