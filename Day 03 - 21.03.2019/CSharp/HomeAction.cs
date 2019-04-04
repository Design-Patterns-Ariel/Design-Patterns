using System;
using System.Collections.Generic;
using System.Text;

namespace Facade
{
    public abstract class  HomeAction
    {
        public String CloseTheDoor(Boolean action)
        {
            if (!action)
                return "The door is Closed";
            else
                return "The door is Open";
        }

        public String CloseTheAir(Boolean action)
        {
            if (!action)
                return "The air is Closed";
            else
                return "The air is Open";
        }

        public String CloseTheLight(Boolean action)
        {
            if (!action)
                return "The light is Closed";
            else
                return "The light is Open";
        }

        public String TeethBrushing(Boolean action)
        {
            if (!action)
                return "I brushed my teeth";
            else
                return "I did not brush my teeth";
        }

        public String OrganizationToExit(Boolean action)
        {
            if (!action)
                return "An organized case";
            else
                return "An unorganized file";
        }
    }
}
