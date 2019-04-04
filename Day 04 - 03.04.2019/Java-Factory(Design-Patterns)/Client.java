package ClassWork;

public class Client implements User{

    public static boolean isValid(String name, String password) {
        return name.equals("client") &&
                password.equals("1234");
    }

    @Override
    public String getInfo() {
        return "I am a Client";
    }

}