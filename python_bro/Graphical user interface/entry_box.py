

from tkinter import *

#entry weight=textbox that accepts a single line of user input.
window=Tk()
def submit():
    username=entry.get()
    print(f"Hello {username}")
    # entry.config(state=DISABLED)

def delete():
    entry.delete(0,END)
    
def backspace():
    entry.delete(len(entry.get())-1,END)
    

entry=Entry(window,
            font=("Arial",50),
            bg="black",
            fg="green",
            show='*')

entry.pack(side=LEFT)

submit_button=Button(window,
                     text="submit",
                     command=submit)

submit_button.pack(side=RIGHT)

delete_button=Button(window,
                     text="delete",
                     command=delete)

delete_button.pack(side=BOTTOM)


backspace_button=Button(window,
                     text="backspace",
                     command=backspace)

backspace_button.pack(side=RIGHT)







window.mainloop()