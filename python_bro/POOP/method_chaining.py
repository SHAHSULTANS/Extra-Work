

#method chaining=calling multiple methods sequentially
#                each call performs an section on the same
#                object  and returns self.



class Car:
    def turn_on(self):
        print("You start the engine")
        return self
    
    def drive(self):
        print("You drive the car")
        return self
        
    
    def brake(self):
        print("You step on the brakes")
        return self

    def turn_off(self):
        print("You turn off the engine")
        return self


car=Car()

car.drive().brake()#when use return self. then should it work


#this is \ used for readable purpose.
car.turn_on()\
    .drive()\
    .brake()\
    .turn_off()