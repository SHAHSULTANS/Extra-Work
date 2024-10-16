

#abstract class= A class which contains one or more abstract method.
#abstract method= A mehtod that has a declaration but doesn't have an implementation.


from abc import ABC,abstractmethod

class Vehicle(ABC):
    @abstractmethod
    def go(self):
        pass
    
class Car(Vehicle):
    def go(self):
        print("You drive the car")

class Motor(Vehicle):
    def go(self):
        print("You drive motor")
        
#we can not create abstract object. when we use abstractmehtod function.      
# vehicle=Vehicle()
# vehicle.go()



car=Car()
car.go()
#similar for Motor Class object.

        