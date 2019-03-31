def get():
 
        x = -1

        if x < 0:
            raise Exception(x)
try:
    get()
except Exception as s:
    print(s)
