class HomeAction :
    
    Singltone = True

    def __init__(self):
        if HomeAction.Singltone==True:
            HomeAction.Singltone=self
        else:
            raise Exception(HomeAction.Singltone)



def Handel():
    try:
        test=  HomeAction()
    except Exception as s :
        test= s
    return test
   
test = Handel()
test2 = Handel()
test3 = Handel()
test4 = Handel()
print(test)
print(test2)
print(test3)
print(test4)





