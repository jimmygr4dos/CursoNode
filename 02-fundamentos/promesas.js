const empleados = [
  {
    id: 1,
    nombre: 'Fernando'
  },
  {
    id: 2,
    nombre: 'Linda'
  },
  {
    id: 3,
    nombre: 'Karen'
  },
]

const salarios = [
  {
    id: 1,
    salario: 1000
  },
  {
    id: 2,
    salario: 1500
  },
]

const getEmpleado = ( id) => {  
  return new Promise(( resolve, reject ) => {
    const empleado = empleados.find( e => e.id === id )?.nombre;
    ( empleado ) 
      ? resolve(empleado)
      : reject(`No existe empleado con id ${id}`);
  });
}

const getSalario = ( id) => {  
  return new Promise(( resolve, reject ) => {
    const salario = salarios.find( e => e.id === id )?.salario;
    ( salario ) 
      ? resolve(salario)
      : reject(`No se ha registrado un salario para el empleado con id ${id}`);
  });
}

const id = 3;

/*  ******************************
    Haciendo promesas por separado
    ****************************** */
//  getEmpleado(id)
//   .then( empleado => console.log(empleado))
//   .catch( err => console.log(err));

// getSalario(id)
//   .then( salario => console.log(salario))
//   .catch( err => console.log(err));


/*  *********************
    Anidando las promesas
    ********************* */

// getEmpleado( id )
//   .then( empleado => {
//     getSalario( id )
//       .then( salario => {
//         console.log(`El empleado ${ empleado } tiene un salario de ${ salario }`);
//       })
//       .catch( err => console.log(err))
//   })
//   .catch( err => console.log(err))

/*  **********
    Otra forma
    **********  */
let nombre;
getEmpleado( id )
  .then( empleado => {
    nombre = empleado;
    return getSalario( id )
  })
  .then( salario => console.log('El empleado:', nombre, 'tiene un salario de', salario))
  .catch( err => console.log(err))

