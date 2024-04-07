import http from 'http';

http.createServer( (req, res) =>{
  
  // console.log(req);

  // res.writeHead(200, {'Content-Type': 'application/json'});

  // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
  // res.writeHead(200, {'Content-Type': 'application/csv'});

  // const persona = {
  //   id: 1, 
  //   nombre: 'Jimmy'
  // }

  // res.write( JSON.stringify(persona) );
  // res.write( 'id, nombre\n' );
  // res.write( '1, Juan\n' );
  // res.write( '2, María\n' );
  // res.write( '3, Fernando\n' );
  // res.write( '4, Ana\n' );

  res.write( 'Hola mundo' );
  res.end();

})
.listen( 8080 );

console.log("Escuchando el puerto", 8080);