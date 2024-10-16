

groceries=[["apple","orange","coconut"],
           ["celery","carrots","potatos"],
           ["chicken","fish","turkey"]]

# print(groceries[0][0])

# for collection in groceries:
#     print(collection)

for collection in groceries:
    for x in collection:
        print(x,end=" ")
        
    print()
    