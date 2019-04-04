using System;
namespace Factory__Design_Patterns_
{
    class Client:IUser
    {
        public static bool isValid(String name, String password)
        {
            return name==("client") && password==("1234");
                   
        }

        
    public String getInfo()
        {
            return "I am a Client";
        }
    }
}
