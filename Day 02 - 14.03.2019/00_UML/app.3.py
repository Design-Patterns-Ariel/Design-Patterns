class Person:

	instance=Person()
	def __init__(self):
		if  Person.instance:	
			raise Person.instance
		Person.instance=self
			







