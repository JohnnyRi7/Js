

class Propiedad {
  constructor(zona,estilo, ambientes, m2, precioalquiler, ventaprecioendolares,aumentosemestral,) {
    this.zona = zona
    this.estilo = estilo
    this.ambientes = ambientes
    this.m2 = m2
    this.precioalquiler = precioalquiler
    this.ventaprecioendolares = ventaprecioendolares
    this.aumentosemestral = aumentosemestral
    
  }
  aumentoSemestral(porcentaje) {
    this.aumentosemestral *= porcentaje
  }
}
const propiedad1 = new Propiedad("Ituzaingó", "Dúplex", "4 Ambientes", 150, 60000, "No esta disponible en dolares", 60000, );
const propiedad2 = new Propiedad("San isidro", "Country", "5 Ambientes", 325, "No esta en alquiler", 350000, );
const propiedad3 = new Propiedad("Castelar", "Dpto", "2 Ambientes", 35, "Disponible a valor dolar oficial", 26000 ,26000);
const propiedad4 = new Propiedad("Caballito", "Loft", "2 Ambientes", 40, "No esta disponible en dolares", 28000);


const arrayPropiedad = [propiedad1, propiedad2, propiedad3, propiedad4];

for (let propiedadArray of arrayPropiedad) {
    propiedadArray.aumentoSemestral(1.15)
}
console.log(arrayPropiedad)


const zona = prompt("Ingrese Zona entre: Ituzaingó , San isidro , Castelar , Caballito");
const propiedad = arrayPropiedad.find((propiedad) => propiedad.zona === zona);
document.body.innerHTML +=
  " Zona : " +
  propiedad.zona +
  " Estilo : " +
  propiedad.estilo +
  " Ambientes : " +
  propiedad.ambientes +
  " Metros cuadrados : " +
  propiedad.m2 +
  " Precio de alquiler : " +
  propiedad.precioalquiler +
  " Precio en dolares :  " +
  propiedad.ventaprecioendolares +
  " Aumento semestral:  " +
propiedad.aumentosemestral 



localStorage.setItem("estilo", propiedad.zona)
  
const avisoZona = function (zona) {
  const estilo = localStorage.getItem("estilo")
  alert(estilo);
}
document.body.addEventListener("click", avisoZona);

console.log(propiedad);