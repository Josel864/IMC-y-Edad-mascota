function edadmascota() {
    let a=parseFloat(document.getElementById("n1").value);
    eh=(16*Math.log(a))+31
    var eh1=eh.toFixed(2);

    document.getElementById("res").innerHTML=("La edad de la mascota es<br>"+eh1)
}