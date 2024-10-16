# phython credit card validator programm

# remove any '-' or ' '
# 1. add all digit in the odd places from right to left
# 2, Double every second digit from right to left (if result is a two digit number, then add two digit number together to get a single digit.)

# sum the total of steps 1 & 2
# if sum is divisble by 10, the credit card # valid

sum_even_digit=0
sum_odd_digit=0
total=0

#step
card_number=input("Enter a credit card number: ")
card_number=card_number.replace("-","")
card_number=card_number.replace(" ","")
card_number=card_number[::-1]

print(card_number)

#step

for x in card_number[::2]:
    sum_odd_digit+=int(x)
    
    
for x in card_number[1::2]:
    x=int(x)*2
    if(x>=10):
        sum_even_digit=(1+x%10)
    else:
        sum_even_digit+=x
        
        
        
total=sum_odd_digit+sum_even_digit


if(total%10):
    print("Valid")
else:
    print("Invalid")

 
