ipas = int(input("masukan nilai ipas :"))
bahasa_indo = int(input("masukan nilai bahasa indo :"))  
bahasa_inggris = int(input("masukan nilai bahasa inggris :"))
matematika = int(input('masukan nilai matematika :'))
total_nilai = ipas + bahasa_indo + bahasa_inggris + matematika

if total_nilai >= 200:
    print('kamu lulus')

else:
    print('kamu tidak lulus')

