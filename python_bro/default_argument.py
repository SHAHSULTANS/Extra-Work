# A default value for certain parameters default is used when that argument is omitted make make your functions more flexible, reduces


def net_price(list_price,discount=0,tax=0.05):
    return list_price*(1+tax)*(1-discount)
    
    
print(net_price(500,0.1))