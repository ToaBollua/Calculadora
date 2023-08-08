function suma() {
    var sum1 = parseFloat(prompt('Ingrese un número: '));
    var sum2 = parseFloat(prompt('Ingrese otro número: '));
    var res1 = parseFloat(sum1 + sum2);
    console.log(sum1, '+', sum2);
    if (sum1 === 1 && sum2 === 1) {
        console.log('El resultado es: Soprole');
    } else if (res1 === 13) {
        console.log('Entre más me la mamas más me crece');
    } else {
        console.log('El resultado es: ' + res1);
    }
}

function resta() {
    var sus1 = parseFloat(prompt('Ingrese un número: '));
    var sus2 = parseFloat(prompt('Ingrese otro número: '));
    var res2 = parseFloat(sus1 - sus2);
    console.log(sus1, '-', sus2);
    console.log('El resultado es: ' + res2);
}

function mult() {
    var mult1 = parseFloat(prompt('Ingrese un número: '));
    var mult2 = parseFloat(prompt('Ingrese otro número: '));
    var res3 = parseFloat(mult1 * mult2);
    console.log(mult1, '*', mult2);
    if (mult1 === 8 && mult2 === 8) {
        console.log('El resultado es: Super 8');
    } else {
        console.log('El resultado es: ' + res3);
    }
}

function div() {
    var div1 = parseFloat(prompt('Ingrese un número: '));
    var div2 = parseFloat(prompt('Ingrese otro número: '));
    console.log(div1, '/', div2);
    if (div1 === 0 || div2 === 0) {
        console.log("No se puede dividir entre 0.");
        return;
    } else {
        var res4 = parseFloat(div1 / div2);
        console.log('El resultado es: ' + res4);
    }
}

function tabla() {
    var tab1 = parseInt(prompt('Ingrese un número: '));
    for (var i = 0; i < 13; i++) {
        console.log(tab1 + ' x ' + i + ' = ' + tab1 * i);
    }
}

function usumenu() {
    var menu = true;
    while (menu) {
        var opt = prompt('1) Suma\n2) Resta\n3) Multiplicación\n4) División\n5) Tablas\n6) Salir\n¿Qué opción desea elegir?');
        if (opt === '1') {
            suma();
        } else if (opt === '2') {
            resta();
        } else if (opt === '3') {
            mult();
        } else if (opt === '4') {
            div();
        } else if (opt === '5') {
            tabla();
        } else if (opt === '6') {
            menu = false;
        } else {
            console.log('Opción inválida. Por favor, elija una opción válida.');
        }
    }
}

usumenu();
