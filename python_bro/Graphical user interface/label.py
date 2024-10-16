
from tkinter import *
#Label= An area widget that holds text and/or an image within a window.


window=Tk()
window.title("Label")

photo=PhotoImage(file='C:\\Users\\ACER\\Downloads\\download.png')
#tkinter supports GIF,PGM,PPM,PNG formats. Make sure that your images file is in one of these formats.

label=Label(window,
                text="Hello world",
                font=('Arial',40,'bold'),
                fg='green',
                bg='Black',
                relief='raised',
                border=10,
                padx=10,
                pady=10,
                image=photo,
                compound='bottom')

# label.place(x=100,y=100)
label.pack()

window.mainloop()
