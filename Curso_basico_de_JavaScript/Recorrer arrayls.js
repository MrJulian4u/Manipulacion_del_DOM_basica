var articulos = 
[
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
]
     
    var articulosFiltrados = articulos.filter
    (
      function (articulo) 
  {
    return articulo.costo <= 500
  }
    )
  
  console.log(articulosFiltrados)
  /* [
    { nombre: 'Libro', costo: 320 },
    { nombre: 'Teclado', costo: 500 }
  ] */


  var encuentraArticulo = articulos.find 
  (function(articulo)
  {
    return articulo.nombre === "Laptop"
  }
  );
/* 
{ nombre: 'Laptop', costo: 3000 }
*/


articulos.forEach(function (articulo) {
  console.log(articulo)
})
/* 
{ nombre: 'Bici', costo: 3000 }
{ nombre: 'TV', costo: 2500 }
...
{ nombre: 'Audifonos', costo: 1700 }
*/

var articulosBaratos = articulos.some(function(articulo)
{
  return articulo.costo <= 700;
}
)
//true