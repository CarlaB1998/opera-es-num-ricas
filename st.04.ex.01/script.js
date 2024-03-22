/*
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

 */

let numberOne =Number(prompt("insira o primeiro número"))
let numberTwo= Number(prompt("insira o segundo número"))
alert("A soma dos dois números é " +( numberOne+ numberTwo))
alert("A subtração dos dois números é " +( numberOne- numberTwo))
alert("A multiplicação dos dois números é " +( numberOne* numberTwo))
alert("A divisão dos dois números é " +( (numberOne/ numberTwo).toFixed(2)))
alert("O resto da dibisão dos dois números é " +( numberOne % numberTwo))

if((numberOne+numberTwo)%2===0){alert("a soma dos dois números é par")}
else {alert( "A soma dos dois números é impar")}

if(numberOne===numberTwo){
    alert( "Os dois números inseridos são iguais")

}
else{ alert( "Os dois números inseridos são diferentes")}


