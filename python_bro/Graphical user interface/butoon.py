from tkinter import *

#butoon=You click it, then it does stuff.

window=Tk()

def click():
    print("You Clicked the button!")



#we can add photo in button. like label in a GUI
button=Button(window,
              text="Click me!!",
              bg='orange',
              command=click,
              font=("comic sans",30),
              fg="green",
              activebackground="grey",
              state=ACTIVE)

button.pack()

window.mainloop()