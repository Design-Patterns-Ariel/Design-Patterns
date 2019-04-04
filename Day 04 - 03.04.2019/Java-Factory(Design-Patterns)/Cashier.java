package ClassWork;

public class Cashier implements User {

    public static boolean isValid(String name, String password) {
        return name.equals("cash") &&
                password.equals("1234");
    }

    @Override
    public String getInfo() {
        return "I am a Cashier";
    }

}