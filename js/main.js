/*Pedir un texto mediante prompt, concatenar un valor en cada repeticion, 
realizando una salida por cada resultado, hasta que se ingresa ESC*/

let ingreseNombre = prompt("Ingrese su nombre").toUpperCase()

while(ingreseNombre != "ESC"){
    alert("Bienvenido" + " " + ingreseNombre)
    ingreseNombre = prompt("Ingrese otro nombre")
}