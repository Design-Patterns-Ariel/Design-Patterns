class Admin:

	def __init__(self):
		pass
	@staticmethod
	def isValid(name, password): 
		return "admin" == name and "1234" == password

	def getInfo(self):
		return "I am an Admin"
	


