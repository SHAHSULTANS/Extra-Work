import random
import string


chars=" "+string.punctuation+string.ascii_letters+string.digits

chars=list(chars)
key=chars.copy()
random.shuffle(key)


#Encript
plain_text=input("Enter a message to encrypt: ")
ciper_text=""

for letter in plain_text:
    index=chars.index(letter)
    ciper_text+=key[index]
    
print(f"Orginal message: {plain_text}")
print(f"Encrypt message: {ciper_text}")

print()

cyper=input("Enter a encrypt message: ")
orginal=""
for letter in cyper:
    index=key.index(letter)
    orginal+=chars[index]
    
print(f"Orginal message: {orginal}")
    


