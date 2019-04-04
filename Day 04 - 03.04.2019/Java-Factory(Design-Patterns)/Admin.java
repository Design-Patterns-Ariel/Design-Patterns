package ClassWork;

public class Admin implements User{

    public static boolean isValid(String name, String password) {
        return name.equals("admin") &&
                password.equals("1234");
    }

    @Override
    public String getInfo() {
        return "I am an Admin";
    }

}
