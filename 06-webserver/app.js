import express from 'express';
import path from 'path';

const app = express();
const port = 8080;

//Servir contenido estático
app.use( express.static('public') );

// app.get('/', (req, res) => {
//   res.send('Home page')
// });

// app.get('/hello', (req, res) => {
//   res.send('Hello world!')
// });

app.get('/generic', (req, res) => {
  // res.sendFile(__dirname + '/public/generic.html');
  res.sendFile( path.resolve('public/generic.html'));
});

app.get('/elements', (req, res) => {
  // res.sendFile(__dirname + '/public/generic.html');
  res.sendFile( path.resolve('public/elements.html'));
});

app.get('*', (req, res) => {
  // res.send('404 | Page not found')
  res.sendFile( path.resolve('public/404.html'));
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
});
