/*
RegExp

/patró/modificadors

*/

let patro = /dwec/i;

let cadena = "HolatalDWec33hola @3s equetedwec boquepasa DWEC y tal y .";

let posicio = cadena.search(patro);

//cadena = "jmelsion21@iesjoanramis.org";

//patro = /\w/g;
//patro = /\d/g;
//patro = /\W/g;
//patro = /\S/g;

patro = /DWec+33hola/gi;

//cadena = "cada 10  100 o cada 1000 vegades";
//patro = /\d{2,3}/g;

let re = new RegExp(/DWec33hola/, 'gi');

//let resultat = cadena.match();

console.log(re.exec(cadena));

