class Cashier:
	def __init__(self):
		pass
	@staticmethod
	def isValid(name,  password):
		return "cash" == name and "1234" == password
		
	
	def getInfo(self):
		return "I am a Cashier"