

foods=[]
prices=[]

while True:
    food=input("Enter a food to buy(q to quit): ")
    
    if(food.lower()=="q"):
        break
    else:
        price=float(input(f"Enter the price of a{food}: $"))
        foods.append(food)
        prices.append(price)


print("----- YOUR CART-----")

for food in foods:
    print(food,end=" ")
    
total=0
for price in prices:
    total+=price
    
print(f"Your total is: ${total}")