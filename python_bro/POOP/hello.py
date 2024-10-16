from car import Car

car1= Car("Chevy","Corvette",2021,"blue")
#similar we can create more than one object same as car1.

print(car1.make)
print(car1.model)
print(car1.year)
print(car1.color)

#Car.wheels=4  that is affected all instance of class

car1.drive()
car1.stop()



print(Car.wheels)