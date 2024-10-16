


#multilevel inheritance
class Organism:
    alive=True
    
class Animal(Organism):
    def eat(self):
        print("This animal is eating")

class Dog(Animal):
    def bark(self):
        print("This animal is barking")
        
        
dog=Dog()
print(dog.alive)



#multiple inheritanec 
#means a child class inherites more than one class.