import { UserFactory } from "./UserFactory";
import { IUser } from "./IUser";
class Main {

	public static main() {

	var names = ["cash", "bob", "client", "admin"];

	for(let name in  names) {
		let user:IUser
		user=UserFactory.login(name, "1234");
		if(user==null) {
			console.log(name+" is not valid");
		}
		else {
			console.log(name+" "+user.getInfo());
		}
	}
}
}

