//EX 01. Faça um programa que verifica se um número é par, caso contrário retornar que é ímpar.
//EX 02. Faça um programa que verifica se um número é ímpar, caso contrário retornar que é par. 

// let x=prompt("Digite um número para verificar se ele é par ou impar: ")

// if (x % 2 == 1)(
//     document.write("O número digitado é ímpar")
// )
// else(
//     document.write("O número digito é par")
// )

//EX 03. Faça um programa que verifica se um número é divisível por 11, caso contrário retornar que não é divisível por 11.

// let x=prompt("Digite um número para verificar se ele é divisivel por 11: ")

// if (x % 11 == 0)(
//     document.write("O número é divisivel por 11")
// )
// else(
//     document.write("O número não é divisivel por 11")
// )

//EX 04. Faça um programa que receba dois números e indica qual é o maior.
//EX 05. Faça um programa que recebe 2 números, exibe o maior, se forem iguais exibe “números iguais”.

// let x=parseInt(prompt("Digite o primeiro número"))
// let y=parseInt(prompt("Digite o segundo número"))

// if (x > y)(
//     document.write(x, " é maior que ", y)
// )
// else if( x < y)(
//     documento.write((y, " é maior que ", x))  
// )
// else(
//     document.write("Os números são iguais")
// )

//EX 06. Faça um programa que implemente uma calculadora com as quatro operações básicas.

// let x=parseInt(prompt("Digite o primeiro número"))
// let y=parseInt(prompt("Digite o segundo número"))

// let z=prompt("qual operação quer realizar? (+, -, / ou *)")

// if(z >! "*" || z >! "+" || z >! "/" || z >! "-" )(
//     document.write("Variaveis digitadas invalidas")
// )
// else if(y == 0)(
//     document.write("O segundo número não pode ser zero")
// )
// else{
//         if (z == "+") {
//         document.write("Seu resultado é: ", x + y);
//     } else if (z == "-") {
//         document.write("Seu resultado é: ", x - y);
//     } else if (z == "*") {
//         document.write("Seu resultado é: ", x * y);
//     } else if (z == "/") {
//         document.write("Seu resultado é: ", x / y);
//     }
// }

//EX 07. Faça um programa que calcule as raízes da equação de 2º grau.
// 8. Dadas as equações:  Determinar as raízes ou zero dessas equações. Utilize a função: Math.sqrt(raiz)

// let x=parseInt(prompt("Digite o primeiro número da equação"))
// let y=parseInt(prompt("Digite o segundo número da equação"))
// let z=parseInt(prompt("Digite o terceiro número da equação"))

// let delta = (y**2)-((4*x)*z)

// if(delta < 0)(
//     document.write("A equação não possui raízes reais.")
// )
// else{
//     let x1 = (-y + Math.sqrt(delta)) / (2 * x);
//     let x2 = (-y - Math.sqrt(delta)) / (2 * x);
//     document.write("o valores de x,y são: x:", x1," y:", x2)
// }