let resultado = 0;
let eleccion = document.getElementById("selector");
let mostrarResultado = document.getElementById("resultado")

function Calculos(){
    let primero = document.getElementById("primero").value;
    let segundo = document.getElementById("segundo").value;
    let indiceSeleccionado = selector.selectedIndex;

    switch (indiceSeleccionado) {
        case 0:
            alert("Seleccione una operacion")
        case 1:
            resultado = Number(primero) + Number(segundo);
            break;
        case 2:
            resultado = primero - segundo;
            break;
        case 3:
            resultado = primero * segundo;
                break;
        case 4:
            resultado = primero / segundo;
                break;
    }
    return mostrarResultado.innerHTML = resultado.toFixed(2) + " es su resultado"
}

function validacionDiv(){
    if (segundo > 0) {
        resultado = primero / segundo;
    }
    else {
        // alert("el segundo numero debe ser mayor a 0")
    }

    return false
}