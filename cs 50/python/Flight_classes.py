class Flight():
    def __init__(self,capacity):
        self.capacity=capacity
        self.paassenger=[]
        
    def add_passenger(self,name):
        if not self.opensit():
            return False
        self.paassenger.append(name)  
        return True  
    
    def opensit(self):
        return self.capacity-len(self.paassenger)
        

          
        
flight=Flight(3)   

people=["shanto","khaled","sultan","Abdullah"]

for person in people:
    success=flight.add_passenger(person)
    if success:
        print(f"Added {person} to tthe flight successfully")
    else:
        print(f"No availble seat for {person}")