
var dato = new Array();
var i = 0;
var num = 3;
do{
    var mensaje = [prompt("ingresa tu nombre"),prompt("ingresa tu apellido"),prompt("ingresa tu edad")];

    // i = i;
    // num = num;
    var j = 0;

    for(i; i < num; i++){
        j = j;
        dato[i] =  mensaje[j];
        j++;
    }

    respuesta = prompt("¿Deseas Ingresar mas Datos?");
    // document.write(i +"<br>");
    // document.write(num +"<br>");

    if (respuesta == "si") {
        i = num;
        num = num + 3;
    }

}while(respuesta == "si")

    for(mostrar of dato){
        document.write(mostrar +"<br>");
    }
    

