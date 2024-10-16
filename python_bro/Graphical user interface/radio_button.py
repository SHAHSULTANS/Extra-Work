
from tkinter import *


        

foods=["pizza","humberger","hotdog"]

window=Tk()

def order():
    print(x,end=" ")
    if(x==0):
        print(f"You ordered Pizza")
    elif(x==1):
        print(f"You ordered hamberger")
    elif(x==2):
        print(f"You ordered Hotdog")
    else:
        print("Huh!")   
x=IntVar()

for index in range(len(foods)):

    radiobutton=Radiobutton(window,
                            text=foods[index],#add text
                            variable=x,#group of radio s
                            value=index,
                            padx=25,
                            font=("impact",40),
                            indicatoron=0,
                            width=30,
                            command=order
                            )
    radiobutton.pack(anchor=W)
    


window.mainloop()