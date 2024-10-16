
import os
# print(help(os))
pat="C:\\Users\\ACER\\Desktop\\commands\\new.txt"

if os.path.exists(pat):
    print("That locations exits")
    if os.path.isfile(pat):
        print("That is a textfile")
    elif os.path.isdir(pat):
        print("That is a directory")  
else:
    print("That locations doen't exists")