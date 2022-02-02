$(document).ready(function() {  
 $.ajax({
    type: "POST",
    url: 'database/conexion.php',
    dataType: 'json',
    success: function(response)
    {
      console.log(response);
      var productos = response;
      let arregloOriginal = productos,
      arregloDeArreglos = [];
      const LONGITUD_PEDAZOS = 3; // Partir en arreglo de 3
      for (let i = 0; i < arregloOriginal.length; i += LONGITUD_PEDAZOS) {
        let pedazo = arregloOriginal.slice(i, i + LONGITUD_PEDAZOS);
        arregloDeArreglos.push(pedazo);
      }

      // console.log(arregloDeArreglos);
      var htmlproductos = "<div>Mostrando "+productos.length+" resultados<div><br>";
      for (var i = 0; i <= arregloDeArreglos.length - 1; i++) {
        htmlproductos +=  "<div class='card-group row justify-content-start'>";
        for (var j = 0; j <= arregloDeArreglos[i].length - 1; j++) {
          htmlproductos +="<div class='card col-4'>"+
                            "<img class='card-img-top' src='images/"+arregloDeArreglos[i][j].imagen+"' alt='Card image'>"+
                            "<div class='card-body'>"+
                              "<h5 class='card-title'>"+arregloDeArreglos[i][j].nombre+"</h5>"+
                              "<p class='card-text'>"+arregloDeArreglos[i][j].descripcion+"</p>"+
                              "<p class='card-text'>"+arregloDeArreglos[i][j].moneda+" "+arregloDeArreglos[i][j].precio+"</p>"+
                            "</div>"+
                          "</div>";
          if (arregloDeArreglos[i].length<=2) {
            htmlproductos +="<div class='card col-4'></div><div class='card col-4'></div>";
          }
        }
        htmlproductos += "</div>";
      }
      htmlproductos += "</div>";
      $('#productos').append(htmlproductos);
    }
  });
});