class Client:
	def __init__(self):
		pass
	@staticmethod
	def isValid(name,  password):
		return "client" in name and "1234" in password
		
	
	def getInfo(self): 
		return "I am a Client"