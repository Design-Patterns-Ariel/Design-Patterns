
text = input('Enter something: ')
try:
    if len(text) < 3:
        raise Exception()  
        
except Exception:
    print("End of dddapp")
finally:
    print("End of app")


