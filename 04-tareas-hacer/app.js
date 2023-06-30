// require('colors');
import colors from 'colors';
import { inquirerMenu } from './helpers/inquirer.js';

// const { mostrarMenu, pausa } = require('./helpers/mensajes');

console.clear();

const main = async () => {
  console.log('Hola Mundo!');

  let opt = '';

  do {    
    // opt = await mostrarMenu();
    opt = await inquirerMenu();
    console.log({opt});

    // if (opt !== '0') await pausa();

  } while (opt !== '0');

  // pausa();
}

main();
