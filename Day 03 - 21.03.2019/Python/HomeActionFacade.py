from HomeAction import*

class HomeActionFacade():
	_single=None 
	_instance = True
	def __init__( self ): 
		try:         
			HomeActionFacade._single = HomeAction()
		except Exception:
			HomeActionFacade._single = HomeActionFacade._single

		if HomeActionFacade._instance==True: 
			HomeActionFacade._instance = self 
		else:
			raise Exception(HomeActionFacade._instance)

	def Sleep(self):  

		print("\n\n---------------------------------------")
		print("You have selected Sleep mode")
		print("---------------------------------------")
		print(HomeActionFacade._single.CloseTheLight(False))
		print(HomeActionFacade._single.TeethBrushing(True))
		print(HomeActionFacade._single.CloseTheDoor(False))
		print("---------------------------------------\n\n")


	def ExitTheHouse(self):
		print("---------------------------------------")
		print("You have selected Exit mode from home")
		print("---------------------------------------")
		print(HomeActionFacade._single.CloseTheDoor(False))
		print(HomeActionFacade._single.CloseTheAir(True))
		print(HomeActionFacade._single.CloseTheLight(False))
		print(HomeActionFacade._single.OrganizationToExit(True))
		print("---------------------------------------\n\n")
    




