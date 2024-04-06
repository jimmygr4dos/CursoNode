import dotenv from 'dotenv';
import { inquirerMenu, leerInput, listarLugares, pausa } from "./helpers/inquirer.js"
import { Busquedas } from "./models/busquedas.js";

dotenv.config();

const main = async () => {
  
  const busquedas = new Busquedas();
  let opt;

  do {
    opt = await inquirerMenu();

    switch(opt) {
      case 1:
        // Mostrar mensaje
        const termino = await leerInput('Ciudad: ');

        // Buscar los lugares
        const lugares = await busquedas.ciudad(termino);
        // console.log(lugares);

        // Seleccionar el lugar
        const id = await listarLugares(lugares);
        if (id === '0') continue;

        const lugarSeleccionado = lugares.find( lugar => lugar.id == id);
        // console.log({lugarSeleccionado});

        //Guardar en DB
        busquedas.agregarHistorial(lugarSeleccionado.nombre)

        // Clima
        const clima = await busquedas.climaLugar(lugarSeleccionado.lat, lugarSeleccionado.lng);
        // console.log({clima});

        // Mostrar resultados
        console.clear();
        console.log('\nInformación de la ciudad\n'.green);
        console.log('Ciudad: ', lugarSeleccionado.nombre.green);
        console.log('Lat: ', lugarSeleccionado.lat);
        console.log('Lng: ', lugarSeleccionado.lng);
        console.log('Temperatura: ', clima.temp);
        console.log('Mínima: ', clima.min);
        console.log('Máxima: ', clima.max);
        console.log('Cómo está el clima: ', clima.desc.green);

      break;
      case 2:
        // Buscar ciudad
        // busquedas.historial.forEach( (lugar, i) => {
        busquedas.historialCapitalizado.forEach( (lugar, i) => {
          const idx = `${ i + 1}.`.green;
          console.log( `${ idx } ${ lugar }` );
        })
      break;
    }

    // console.log({opt});
    
    if (opt !== 0)
      await pausa();
  
  } while (opt !== 0);

  
}

main();