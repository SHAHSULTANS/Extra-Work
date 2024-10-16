


def shipping_label(*args,**kwarg):
    for arg in args:
        print(arg,end=" ")
    print()
    for key,value in kwarg.items():
        print(f"{key }:  {value}")
    



shipping_label("Mr.","Shah","sultan",
               street="123 Fk st",
               city="Sherpur")