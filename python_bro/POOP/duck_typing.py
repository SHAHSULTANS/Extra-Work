
#walk like a dog. quack like a dog.That means that's a dog
class Duck:
    def walk(self):
        print("This duck is walking")
    def talk(self):
        print("This duck is qwuacking")
        
class Chiken:
    def walk(self):
        print("This chicken is walking")
    def talk(self):
        print("This chicken  is qwuacking")
        
class Animal:
    def catch(self,object):
        object.walk()
        object.talk()
        
duck=Duck()
chiken=Chiken()
animal=Animal()

animal.catch(chiken)
animal.catch(duck)