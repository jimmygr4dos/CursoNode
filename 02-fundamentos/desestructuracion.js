const deadpool = {
  nombre: 'Wade',
  apellido: 'Winston',
  poder: 'Regeneración',
  // edad: 50,
  getNombre() {
    return `${this.nombre} ${this.apellido} ${this.poder}`
  }
}

// console.log(deadpool.getNombre());

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

//recibiendo heroe como argumento
// const imprimirHeroe = ( heroe ) => {
//   const { nombre, apellido, poder, edad = 0 } = heroe;
//   console.log( nombre, apellido, poder, edad );
// }

//destructurando el argumento
const imprimirHeroe = ({ nombre, apellido, poder, edad = 0 }) => {
  nombre = 'Otro nombre';
  console.log( nombre, apellido, poder, edad );
}

// imprimirHeroe( deadpool );

const personajes = ['Deadpool', 'Magneto', 'Xavier'];
// const p1 = personajes[0];
// const p2 = personajes[1];
// const p3 = personajes[1];
// const [ p1, p2, p3 ] = personajes;
const [ , , p3 ] = personajes;
// console.log(p1, p2, p3);
console.log(p3);
