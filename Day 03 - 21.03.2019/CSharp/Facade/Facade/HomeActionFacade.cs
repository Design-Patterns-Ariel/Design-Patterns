using System;
using System.Collections.Generic;
using System.Text;

namespace Facade
{
    class HomeActionFacade:HomeAction
    {
        private HomeActionFacade() { }

        public static HomeActionFacade GetInstance() { return new HomeActionFacade(); }

        public void Sleep()
        {
           
             Console.WriteLine("\nYou have selected Sleep mode\n");
             Console.WriteLine("---------------------------------------");
             Console.WriteLine(CloseTheLight(false));
             Console.WriteLine(TeethBrushing(true));
             Console.WriteLine(CloseTheDoor(false));
             Console.WriteLine("---------------------------------------\n");

        }
        public void ExitTheHouse()
        {
             Console.WriteLine("\nYou have selected Exit mode from home\n");
             Console.WriteLine("---------------------------------------");
             Console.WriteLine(CloseTheDoor(false));
             Console.WriteLine(CloseTheAir(true));
             Console.WriteLine(CloseTheLight(false));
             Console.WriteLine(OrganizationToExit(true));

             Console.WriteLine("---------------------------------------\n");
        }

    }
}
