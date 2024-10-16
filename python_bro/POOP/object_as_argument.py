
class Car:
    color=None
    pass


class Motor:
    color=None


    
def change_color(car,color):
    car.color=color
    
    
car1=Car()
car2=Car()
car3=Car()

change_color(car1,"Green")
change_color(car2,"Yellow")


motor1=Motor()

change_color(motor1,"Black")

print(car1.color)
print(car2.color)
print(motor1.color)
