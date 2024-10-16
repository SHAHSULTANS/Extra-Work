import time


mytime=int(input("enter the time in Seconds: "))

# for x in range(mytime,0,-1):
#     print(x)
#     time.sleep(1)
    
# print("Time's up")

for x in range(mytime,0,-1):
    second=x%60
    minutes=int(x/60)%60
    hours=int(x/3600)
    
    print(f"{hours:02}:{minutes:02}:{second:02}")
    time.sleep(1)
    
print("Time's up")