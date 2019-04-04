using System;

namespace Factory__Design_Patterns_
{
    class UserFactory
    {
        public static IUser login(String name, String password)
        {
            if (Admin.isValid(name, password))
                return new Admin();
            if (Cashier.isValid(name, password))
                return new Cashier();
            if (Client.isValid(name, password))
                return new Client();

            return null;
        }
    }
}
