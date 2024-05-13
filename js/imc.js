function imc() {
    let a=parseFloat(document.getElementById("n1").value);
    let b=parseFloat(document.getElementById("n2").value);

    i1=a/(b**2)
    var i2=i1.toFixed(2);

    if (i2 < 18.5) {
        document.getElementById("res").innerHTML=("Peso bajo<br> El IMC es: "+i2)
      } else if (imc >= 18.5 && imc < 25) {
        document.getElementById("res").innerHTML=("Normal<br> El IMC es: "+i2)
      } else if (imc >= 25 && imc < 30) {
        document.getElementById("res").innerHTML=("Sobrepeso<br> El IMC es: "+i2)
      } else {
        document.getElementById("res").innerHTML=("Obesidad<br> El IMC es: "+i2)
      }
}
