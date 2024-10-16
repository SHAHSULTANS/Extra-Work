
#exception= events detected during execution that interupt the flow of program.

try:
    numerator=int(input("enter a number to divide: "))
    denominator=int(input("enter a number to divide by: "))
    result=numerator/denominator
    print(result)
except Exception:
    print("something went wrong(): ")
finally:
    print("This will always execute.")






