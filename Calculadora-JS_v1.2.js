// CALCULATOR TEST JS
function suma(){
    var sum1 = parseFloat(prompt('Ingrese un número: '));
    var sum2 = parseFloat(prompt('Ingrese otro número: '));
    var res1 = parseFloat(sum1 + sum2);
    console.log(sum1, '+', sum2);
    if(sum1 == 1 && sum2 == 1) {
        console.log('Tu resultado es: Soprole');
    } else if (res1 === 13) {
        console.log('Entre más me la mamas más me crece');
    } else if (res1 === 11) {
        console.log('Chupalo entonces.');
    } else {
        console.log('Tu resultado es: ', res1);
    }
}
function resta(){
    var sus1 = parseFloat(prompt('Ingrese un número: '));
    var sus2 = parseFloat(prompt('Ingrese otro número: '));
    var res2 = parseFloat(sus1 - sus2);
    console.log(sus1, '-', sus2);
    if (res2 === 11) {
        console.log('Chupalo entonces.')
    } else if (res === 13) {
        console.log('Mientras más me la mamas más me crece')
    } else {
        console.log('Tu resultado es: ', res2);
    }
}
function multi(){
    var mult1 = parseFloat(prompt('Ingrese un número: '));
    var mult2 = parseFloat(prompt('Ingrese otro número: '));
    var res3 = (mult1 * mult2);
    console.log(mult1, '*', mult2);
    if(mult1 == 8 && mult2 == 8) {
        console.log('Tu resultado es: Super 8');
    } else if (res3 === 11) {
        console.log('Chupalo entonces.');
    } else if (res3 === 13) {
        console.log('Mientras más me la mamas más me crece.')
    } else
        (console.log('Tu resultado es: ', res3));
}
function div(){
    var div1 = parseFloat(prompt('Ingrese un número'));
    var div2 = parseFloat(prompt('Ingrese otro número: '));
    var res4 = parseFloat(div1 / div2);
    console.log(div1, '/', div2);
    if(div2 === 0) {
        console.log('No se puede dividir entre 0.');
        console.log('Reiniciando...');
        return
    } else if (res4 === 11) {
        console.log('Chupalo entonces.');
    } else if (res4 === 13) {
        console.log('Mientras más me la mamas más me crece.');
    } else {
        console.log('Tu resultado es: ', res4);
    }
}
/* || 
*/