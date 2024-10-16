

capitals={"USA":"Washington D.C.",
          "INDIA":"New Delhi",
          "China":"Beijing"}

#print(dir(capitals))
#print(help(capitals))

#print(capitals.get("Germany"))

# if(capitals.get("Japan")):
#     print("Exist Capital")
# else:
#     print("Capital Does not exist")

#capitals.update({"Germany":"Berlin"})
# capitals.update({"USA":"Berlin"})
#capitals.pop("INDIA")
# capitals.popitem()

#capitals.clear()

keys=capitals.keys()
#print(keys)
# for key in keys:
#     print(key,end=" ")


#print(capitals)


items=capitals.items()

for key,value in items:
    print(f"{key}-->{value}")