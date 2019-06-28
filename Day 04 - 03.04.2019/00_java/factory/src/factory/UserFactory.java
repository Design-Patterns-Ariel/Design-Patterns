package factory;

public class UserFactory {

	public static User login(String name, String password) {
		if(Admin.isValid(name, password))
			return new Admin();
		if(Cashier.isValid(name, password))
			return new Cashier();
		if(Client.isValid(name, password))
			return new Client();
		
		return null;
	}
}
