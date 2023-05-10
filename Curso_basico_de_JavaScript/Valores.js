var MiNombre;
MiNombre = "diego";
// para forzar un cambio de tipo de variable
// var a = NewTypeof(var)

// Coersión explícita
Boolean(0) // false
Boolean("") // false
Boolean(null) // false
Boolean(undefined) // false
Boolean(NaN) // false
Boolean(false) // false

// Coersión implícita (Don´t use it)
!!0 // false
!!"" // false
!!null // false
!!undefined // false
!!NaN // false
!!false // false

// Coersión explícita
Boolean(12) // true
Boolean("hola") // true
Boolean(true) // true
Boolean([1, 2, 3]) // true
Boolean(function hola() {}) // true
Boolean({ a: 1, b: 2 }) // true
Boolean([]) // true
Boolean({}) // true

3 == "3" //true
3 === "3" // false

//Operadores binarios:
3 + 2 //Suma
50 - 10 // Resta
10 * 20 //Multiplicación
20 / 2 //División

"Diego " + "De Granda" //concatenar strings

//Operadores unitarios:
!false //negación de la negación = true

//Operadores de asignación:
var a = 1; //Asignamos un valor a la variable

//Operadores para comparar:
3 == "3"; //Compara los valores y devuelve "true" en este caso

3 === "3"; //Compara y valida los tipos y valores. Devuelve "falso" en este caso

5 < 3 //Compara y valida si el 5 es menor a 3
5 > 3 //Compara y valida si el 5 es mayor a 3
5 <= 6 //Compara y valida si el 5 es menor o igual al 6
5 >= 6 //Compara y valida si el 5 es mayor o igual al 6

a && b //Valida si ambas variables son verdaderas para que se cumpla la condición
a || b //Aquí se cumple la condición si alguna de las dos variables es verdadera

var edad = 40
edad++ //Incrementa el valor en 1

edad += 2 //Incrementa el valor por 2

var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";

var resultado = function(user, cpu){
    if(user != cpu)
    {
        if(user === op1 && cpu === op3)
        {
            console.log("el usuario GANO con "+ op1)
        }
        else if(user === op2 && cpu === op1)
        {
            console.log( "el usuario GANO con " + op2)
        }
        else if(user === op3 && cpu === op2)
        {
            console.log("el usuario GANO con " + op3)
        }
        else
        {
            console.log("La CPU Gano!!")
        }
    }
    else if(user === cpu){
        console.log("Empate")
    }
}

//switch como alt de if para una gran cantidad de casos. (mala practica, usar en pocos casos).
//Sintaxis:
switch ("opcion a validar")
{
    case "opcion 1" : 
    "accion a realizar";
    break;
}
//Ejemplo:
let dia = "Martes";

switch(dia)
{
    case "Lunes":
        console.log("Hoy es lunes");
        break;
    case "Martes":
        console.log("Hoy es martes");
        break;
    case "miercoles":
        console.log("Hoy es miercoles");
        break;
    case "Jueves":
        console.log("Hoy es jueves");
        break;
    case "Viernes":
        console.log ("Hoy es viernes");
        break;
    case "Sabado":
        console.log("Hoy es sabado");
        break;
    case "Domingo":
        console.log("Hoy es domingo");
        break;
    default:
        console.log("Es el fin de los tiempos");
}
