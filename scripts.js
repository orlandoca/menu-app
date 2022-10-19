//access toke
//ya29.a0Aa4xrXNwe5hBR1LP7BzW1XQLK2q0dho0ieI0kcey0lc7P5aLif29yONyEqHAInGJi8vOLLFdtjRM11F6EyV_qQfeRk6z2xgSBSy0iqbFh4ke8rWtyBNWR0nlE01Sebx0lCJGWX6USI1TR_DjSQQSagy71mDeaCgYKATASARMSFQEjDvL9O633EUAInSkh36TSb_8tJg0163


const SHEET_ID = "15O8MG61R19V7MlJkizUkTDdspC0C25AEu8KNVY7EgOo";

const ACCESS_TOKEN =
"ya29.a0Aa4xrXOQoNn3I14_CBrtUMQX-ua30H0vU4Fz7sLpo-h0V1dIPNjhlmZdqGO53YCCZlztSy4W1-YTAtWQNvrV7iMkykR-HzvEOIcyWuRSqbDrjp2PomUpjWCsky3rlGIocoRJ7ixY3xiyLtfwPnuoY_URSs9aaCgYKATASARASFQEjDvL9L_HFXil6SmwiQi_iY49ZJg0163";
fetch(
  // Obtenemos los datos de la planilla, de la hoja hojaMenu, columnas A y B desde la segunda fila
  `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/bebidas!A2:D5`,
  {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  }
  //esperamos el response
)

.then(function (response) {
  //console.log(response.json());
  //esperamos el json del response para poder utilizarlo

  response.json().then(function (data) {
  console.log(data);
  const values = data.values;

  // Obtenemos el elemento del dom
  const lista = document.getElementById("lista-menu");

  for (var i = 0; i < values.length; i++) {

      // Div que va a contener los datos del producto
      const producto = document.createElement("div");
      producto.className =  "menu-item";

      // Nombre del producto
      const itemProducto = document.createElement("span");
      itemProducto.className = "item producto";
      itemProducto.innerHTML = values[i][0]; 
      
      //nombre del 
      const itemDescripcion = document.createElement("span");
      itemDescripcion.className = "item descripcion";
      itemDescripcion.innerHTML = values[i][1]; 

      // Precio
      const itemPrecio = document.createElement("span");
      itemPrecio.className = "item precio";
      itemPrecio.innerHTML = values[i][2];

      //industria
      const itemIndustria = document.createElement("span");
      itemIndustria.className= "item industria";
      itemIndustria.innerHTML= values[i][3];

      // Agregamos todos los elementos al div de producto
      producto.appendChild(itemProducto);
      producto.appendChild(itemDescripcion);
      producto.appendChild(itemIndustria);
      producto.appendChild(itemPrecio);
    
      

      

      // Agregamos el producto a la lista
      lista.appendChild(producto);
  }
  });
});

