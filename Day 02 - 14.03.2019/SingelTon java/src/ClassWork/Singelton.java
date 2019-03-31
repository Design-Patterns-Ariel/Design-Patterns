package ClassWork;

public class Singelton {

    private Singelton(){}

    private static Singelton instance = new Singelton();

    public static Singelton GetInstance()
    {
        return instance;
    }

}
