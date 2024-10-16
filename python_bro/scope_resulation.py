

#variable scope=where a variable is visible and accessible
#scope resolution=(LEGB) Local->Enclosed->Global->Built-in




def fun1():
    a=1
    
    def fun2():
        a=2
        print(a)
    # fun2()
    
fun1()
