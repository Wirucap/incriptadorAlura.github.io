
function codeEntradaIntento(){
    var inputTexto = document.getElementById('boxTextoEntrada').value;
    var encriptado = document.getElementById('boxTextoSalida')

    inputTexto == "" ? encriptado.innerHTML = "ESTA VACIO" : encriptado.innerHTML = inputTexto.replace(/a/gi,"ai").replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/o/gi,"ober").replace(/u/gi,"ufat");
}

function codeSalidaResultado(){
    var inputTexto = document.getElementById('boxTextoEntrada').value;
    var encriptado = document.getElementById('boxTextoSalida')

    inputTexto == "" ? encriptado.innerHTML = "ESTA VACIO" : encriptado.innerHTML = inputTexto.replace(/ai/gi,"a").replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ober/gi,"o").replace(/ufat/gi,"u");
}

async function copiarncriptado() {
    try {
      await navigator.clipboard.writeText(encriptado.innerHTML);
      alert('Contenido copiado al portapapeles');
    } catch (err) {
      alert('Error al copiar');
    }
  }