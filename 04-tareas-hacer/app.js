import colors from 'colors';
import { inquirerMenu, 
         pausa, 
         leerInput, 
         listadoTareasBorrar, 
         confirmar, 
         mostrarListadoChecklist} from './helpers/inquirer.js';
import { Tarea } from './models/tarea.js';
import { Tareas } from './models/tareas.js';
import { guardarDB, leerDB } from './helpers/guardarArchivo.js';

const main = async () => {

  let opt = '';
  const tareas = new Tareas();

  const tareasDB = leerDB();

  if (tareasDB) {
    // establecer las tareas
    tareas.cargarTareasFroomArray(tareasDB);
  }

  do {
    // Imprimir el menú
    opt = await inquirerMenu();

    switch (opt) {
      case '1':
        // crear opcion
        const desc = await leerInput('Descripción:');
        tareas.crearTarea(desc);
      break;
      case '2':
        //listar las opciones
        tareas.listadoCompleto();
        // console.log(tareas.listadoArr);
      break;
      case '3':
        //listar tareas completadas
        tareas.listarPendientesCompletadas(true);
      break;
      case '4':
        //listar tareas pendientes
        tareas.listarPendientesCompletadas(false);
      break;
      case '5':
        //completado | pendiente
        const ids = await mostrarListadoChecklist(tareas.listadoArr);
        console.log(ids);
        tareas.toggleCompletadas(ids);
      break;
      case '6':
        //borrar tareas
        const id = await listadoTareasBorrar(tareas.listadoArr);
        if (id !== '0') {
          const ok = await confirmar('¿Está seguro?');
          if (ok) {
            tareas.borrarTarea(id);
            console.log('Tarea borrada');
          }
        }
      break;
    }

    //guardar las tareas
    guardarDB(tareas.listadoArr);

    await pausa();

  } while (opt !== '0');


  // pausa();
}

main();
