using System;

namespace Factory__Design_Patterns_
{
    class Program
    {
        public static void Main(String[] args)
        {

            String[] names = { "cash", "bob", "client", "admin" };

            foreach (String name in names)
            {
                IUser user = UserFactory.login(name, "1234");
                if (user == null)
                {
                    Console.WriteLine(name + " is not valid"); 
                }
                else
                {
                    Console.WriteLine(name + " " + user.getInfo()  ); 
                }
            }
        }
    }
}
