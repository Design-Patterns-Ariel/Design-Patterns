package ClassWork;

public class HomeActionFacade extends HomeAction{

    private HomeActionFacade(){}

    public final static HomeActionFacade GetInstance(){return new HomeActionFacade();}

    public void Sleep()
    {
        System.out.println("You have selected Sleep mode");
        System.out.println("---------------------------------------");
        System.out.println(CloseTheLight(false));
        System.out.println(TeethBrushing(true));
        System.out.println(CloseTheDoor(false));
        System.out.println("---------------------------------------");

    }
    public void ExitTheHouse()
    {
        System.out.println("You have selected Exit mode from home");
        System.out.println("---------------------------------------");
        System.out.println(CloseTheDoor(false));
        System.out.println(CloseTheAir(true));
        System.out.println(CloseTheLight(false));
        System.out.println(OrganizationToExit(true));

        System.out.println("---------------------------------------");
    }

}
