package ClassWork;

public class Main {

    public static void main(String[] args) {
        Singelton t1 = Singelton.GetInstance();
        Singelton t2 = Singelton.GetInstance();

        System.out.println(t1);
        System.out.println(t1);
        System.out.println(t1==t2);

    }
}
