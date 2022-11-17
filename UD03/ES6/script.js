/* const nombres = [];
console.log(nombres);
nombres.push('Jander');
console.log(nombres[0]);
console.log(nombres);
const ultimoNombre = nombres.pop();
console.log(ultimoNombre);
console.log(nombres);
const otrosNombres = []; */
//otrosNombres = nombres;

 //DESESTRUCTURACIÓN
 const personaje = ['Sam', 'Gimli', 'Frodo', 'Legolas', 'Pippin'];
 const [leal, heroe, , , pillo] = personaje;
/*  console.log(personaje);
 console.log(leal);
 console.log(pillo); */

 const masPersonaje = {
    nombre: 'Gandalf',
    apodo: 'El Gris',
    edad: 1024,
    armas: ['Glamdring', 'Magia']
 };

 //console.log(nombre);
/*  const {nombre, apodo, armas} = masPersonaje;
 console.log(nombre);
 console.log(armas);
 const [espada, poder] = armas;
 console.log(espada); */
 
 const nombrePersonaje = 'Legolas';
 const razaPersonaje = 'Elfo';
 const armasPesonaje = [{tipo: 'Arco', cantidad: 1}, {tipo: 'Flecha', cantidad: 10}];
 const requetePersonaje = {
    nombre: nombrePersonaje,
    raza: razaPersonaje,
    armas: armasPesonaje,
    edad: 666
 };

 //console.log(requetePersonaje);

 const requetePersonaje2 = {
    nombrePersonaje,
    razaPersonaje,
    armasPesonaje,
    edad: 666
 };

 console.log(requetePersonaje2);