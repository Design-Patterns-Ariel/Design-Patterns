using System;

namespace Factory__Design_Patterns_
{
    class Cashier:IUser
    {
        public static bool isValid(String name, String password)
        {
            return name==("cash") &&password==("1234");
                    
        }

        
    public  String getInfo()
        {
            return "I am a Cashier";
        }
    }
}
