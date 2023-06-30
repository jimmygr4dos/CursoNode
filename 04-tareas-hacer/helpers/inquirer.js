// const inquirer = require('inquirer');
import inquirer from 'inquirer';
// require('colors');
import colors from 'colors';

const preguntas = [{
  type: 'list',
  name: 'option',
  message: '¿Qué desea hacer?',
  choices: [
    {
      value: '1',
      name: '1. Crear tarea'
    },
    {
      value: '2',
      name: '2. Listar tareas'
    },
    {
      value: '3',
      name: '3. Listar tareas completadas'
    },
    {
      value: '4',
      name: '4. Listar tareas pendientes'
    },
    {
      value: '5',
      name: '5. Completar tarea(s)'
    },
    {
      value: '6',
      name: '6. Borrar tarea'
    },
    {
      value: '0',
      name: '0. Salir'
    }
  ]
}];

const inquirerMenu = async () => {
  console.clear();
  console.log('========================'.green);
  console.log(' Selecciones una opción'.green);
  console.log('========================\n'.green);

  //opt.option
  const {option} = await inquirer.prompt(preguntas);

  return option;
}

export {
  inquirerMenu
}