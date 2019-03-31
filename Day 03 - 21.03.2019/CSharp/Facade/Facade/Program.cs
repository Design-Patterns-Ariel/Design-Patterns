using System;

namespace Facade
{
    class Program
    {
        static void Main(string[] args)
        {
            HomeActionFacade d = HomeActionFacade.GetInstance();
            d.ExitTheHouse();
            d.Sleep();
        }
    }
}
