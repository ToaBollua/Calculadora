#REJECTED!!!
#   ~317119205


def suma():
    sum1 = int(input('Ingrese un número: '))
    sum2 = int(input('Ingrese otro número: '))
    res1 = int(sum1 + sum2)
    print('El resultado es: {}' .format (res1))
def resta():
    sus1 = int(input('Ingrese un número: '))
    sus2 = int(input('Ingrese otro número: '))
    res2 = int(sus1 - sus2)
    print('El resultado es: {}' .format (res2))
def mult():
    mult1 = int(input('Ingrese un número: '))
    mult2 = int(input('Ingrese otro número: '))
    res3 = int(mult1 * mult2)
    print('El resultado es: {}' .format(res3))
def div():
    div1 = int(input('Ingrese un número: '))
    div2 = int(input('Ingrese otro número: '))
    res4 = int(div1 / div2)
    print('El resultado es: {}' .format(res4))
def usumenu():
    menu = True
    while menu: 
        opt = input('1) Suma \n2) Resta \n3) Multiplicación \n4) División \n5) Salir \n¿Qué operación desea realizar?: ')
        if opt == '1':
            suma()
            print('Reiniciando...')
        elif opt == '2':
            resta()
            print('Reiniciando...')
        elif opt == '3':
            mult()
            print('Reiniciando...')
        elif opt == '4':
            div()
            print('Reiniciando...')
        elif opt == '5':
            print('Cerrando programa...')
            quit()

follow = True
while follow:
    keep = input('¿Desea comenzar? (y/n) > ')
    keep = keep.lower()
    if keep == 'y':
        usumenu()
    elif keep == 'n':
        follow = False
        print('Cerrando programa...')
        quit()
    else:
        print('Respuesta invalida. Reintentando... ')