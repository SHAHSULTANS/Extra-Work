

#higer order function= A function that either
    #1.Accept a function as an argument
        #or
    #2.return a function.

def loud(text):
    return text.upper()

def quiet(text):
    return text.lower()

def hello(func):
    text=func("Hello")
    print(text)
    
hello(loud)
hello(quiet)