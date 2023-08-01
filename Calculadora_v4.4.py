def suma():
    sum1 = float(input('Ingrese un número: '))
    sum2 = float(input('Ingrese otro número: '))
    res1 = float(sum1 + sum2)
    print(sum1, '+', sum2)
    if sum1 == 1 and sum2 == 1:
        print('El resultado es: Soprole')
    elif sum1 == 12 and sum2 == 1:
        print('Entre más me la mamas más me crece')
    else:
        print('El resultado es: {}' .format (res1))
def resta():
    sus1 = float(input('Ingrese un número: '))
    sus2 = float(input('Ingrese otro número: '))
    res2 = float(sus1 - sus2)
    print(sus1, '-', sus2)
    print('El resultado es: {}' .format (res2))
def mult():
    mult1 = float(input('Ingrese un número: '))
    mult2 = float(input('Ingrese otro número: '))
    res3 = float(mult1 * mult2)
    print(mult1, '*', mult2)
    if mult1 == 8 and mult2 == 8:
        print('El resultado es: Super 8')
    else:
        print('El resultado es: {}' .format(res3))
def div():
    div1 = float(input('Ingrese un número: '))
    div2 = float(input('Ingrese otro número: '))
    print(div1, '/', div2)
    if div1 == 0 or div2 == 0:
        print("No se puede dividir entre 0.")
        return
    else:
        res4 = float(div1 / div2)
        print('El resultado es: {}' .format(res4))
def tabla():
    tab1 = int(input('Ingrese un número: '))
    for i in range (13):
        print(f"{tab1} x {i} = {tab1 * i}")

def usumenu():
    menu = True
    while menu: 
        opt = input('1) Suma \n2) Resta \n3) Multiplicación \n4) División \n5) Tablas \n6) Salir \n¿Qué operación desea realizar?: ')
        if opt == '1':
            suma()
            print('Reiniciando...')
            return
        elif opt == '2':
            resta()
            print('Reiniciando...')
            return
        elif opt == '3':
            mult()
            print('Reiniciando...')
            return
        elif opt == '4':
            div()
            print('Reiniciando...')
            return
        elif opt == '5':
            tabla()
            print('Reiniciando...')
            return
        elif opt == '6':
            print('Cerrando programa... \n~CHUPA productions~')
            quit()
        else:
            print('Respuesta invalida. Reintentando...')
            return

follow = True
while follow:
    keep = input('¿Desea comenzar? (s/n) > ')
    keep = keep.lower()
    if keep == 's':
        usumenu()
        continuar_bool = True
        while continuar_bool:
            continuar = input('¿Desea continuar? (s/n) > ')
            if continuar == 's':
                usumenu()
            elif continuar == 'n':
                continuar_bool = False
                follow = False
                print('Cerrando programa... \n~CHUPA productions~')
                quit()
            else:
                print('Respuesta invalida. Reintentando... ')
    elif keep == 'n':
        follow = False
        print('Cerrando programa... \n~CHUPA productions~')
        quit()
    else:
        print('Respuesta invalida. Reintentando... ')