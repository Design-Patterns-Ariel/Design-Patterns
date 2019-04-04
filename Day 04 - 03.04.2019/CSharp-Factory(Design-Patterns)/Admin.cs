using System;

namespace Factory__Design_Patterns_
{
    class Admin :IUser
    {
       
        public static bool isValid(String name, String password)
        {
            return name == ("admin") && password==("1234");
        }

    
    public String getInfo()
        {
            return "I am an Admin";
        }

    }
}
