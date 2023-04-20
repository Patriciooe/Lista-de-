nombres = [];

function agregar() {

 var n1= document.getElementById("amigo1").value;
 var n2= document.getElementById("amigo2").value;
 var n3= document.getElementById("amigo3").value;
 var n4= document.getElementById("amigo4").value;
 nombres.push(n1);
 nombres.push(n2);
 nombres.push(n3);
 nombres.push(n4);

 document.getElementById("Vacia").innerHTML = nombres;
}