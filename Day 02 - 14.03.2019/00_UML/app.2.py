


try:
    text = input('Enter something: ')

    if len(text) < 3:
        raise Exception()  # Exception - is built-in in python
    print("Good input")

except Exception:
    print("Sorry - to short")

print("End of app")

