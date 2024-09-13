import random

number=random.randrange(1,11)

while True:

     angka=int(input('tebak angka 1-10 :'))
    
    


     if angka == number:
          print('benar')
          break
     elif angka  > number:
          print('terlalu besar')
     elif angka < number:
          print('terlalu kecil')
     elif angka <= 5:
          print('angka kecil')
