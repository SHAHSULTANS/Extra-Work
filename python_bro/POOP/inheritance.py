

class Animal:
    alive=True
    def eat(self):
        print("This animal is eating")
    def sleep(self):
        print("This animal is sleeeping")
        
class Rabbit(Animal):
    def run(self):
        print("This animal is running")

class Fish(Animal):
    pass

class Hawk(Animal):
    pass

rabit=Rabbit()
fish=Fish()
hawk=Hawk()

print(rabit.alive)
rabit.sleep()
rabit.run()