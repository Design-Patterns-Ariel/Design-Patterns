from UserFactory import*

names= ["cash", "bob", "client", "admin"]

for x in names:
	user=UserFactory.login(x, "1234")
	if(user==None): 
		print(x+" is not valid")
	
	else:
		print(x+" "+user.getInfo())

