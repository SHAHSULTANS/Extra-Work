

from tkinter import *

def submit():
    print(f"The temperature is {scale.get()} °C") 

window=Tk()

scale=Scale(window,
            from_=100,to=0,
            length=500,
            orient=VERTICAL,
            font=("Consolas",20),
            tickinterval=10,
            # showvalue=0
            # resolution=5 #increment of slider.
            troughcolor="green",
            fg="blue",
            bg="black"
            ) 

# scale.set(50)  

scale.pack()

butoon=Button(window,
              text="submit",
              command=submit)
butoon.pack()




window.mainloop()