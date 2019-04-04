from Admin import *
from Cashier import *
from Client import *

class UserFactory:

	@staticmethod
	def login(name, password):
		if(Admin.isValid(name, password)):
			return Admin()
		if(Cashier.isValid(name, password)):
			return Cashier()
		if(Client.isValid(name, password)):
			return Client()
		
		return None
