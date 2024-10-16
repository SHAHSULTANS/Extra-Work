
#using with open will close any files automatically.

#with open(file path) as file:
#   print(file.read())


try:
    pat="C:\\Users\\ACER\\Desktop\\commands\\new.txt"
    with open(pat) as file:
        print(file.read())
except FileNotFoundError:
    print("That file was not found:(")