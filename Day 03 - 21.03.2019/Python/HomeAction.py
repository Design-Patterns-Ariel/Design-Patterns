class HomeAction:

    _instance = None

    def __init__(self):

        if HomeAction._instance == None:
            HomeAction._instance = self
        else:
            raise Exception(HomeAction._instance)

    def CloseTheDoor(self, action):
        if (action):
            return("The door is Closed")
        else:
            return("The door is Open"	)

    def CloseTheAir(self, action):
        if (action):
            return "The air is Closed"
        else:
            return "The air is Open"

    def CloseTheLight(self, action):
        if (action):
            return "The light is Closed"
        else:
            return "The light is Open"

    def TeethBrushing(self, action):
        if (action):
            return "I brushed my teeth"
        else:
            return "I did not brush my teeth"

    def OrganizationToExit(self, action):
        if (action):
            return "An organized case"
        else:
            return "An unorganized file"
