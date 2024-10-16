# w->write a file.
# a->overwritten a file.


#defination.......
# with open(file path,'a') as file:
#       file.write(text speech)


#print............
#with open(file path) as file:
#   print(file.read())


text="\n Yoooooooooooooo\nThis is some text\nHave a good one!\n"

pat="C:\\Users\\ACER\\Desktop\\commands\\new.txt"
with open(pat,'a') as file:
    file.write(text)
    

with open(pat) as file:
    print(file.read())


