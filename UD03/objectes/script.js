let coche = {
    marca : "Ford",
    modelo: "Ka",
    color: "Rojo",
    puertas: 3,
    kms: 270000,
    automatico: false,
    propietario: {nombre: "Joan", apellido: "Melsión"}
};

for(campo in coche) {
    //console.log(campo + ": " + coche[campo]);
}

//console.log(coche.propietario.nombre);
//console.log(coche["propietario"]["apellido"]);


let objetoVacio = {};
//console.log(objetoVacio);

let unCliente = {
    nombre: 'Jander Clander',
    'dirección del cliente': 'c/ Desconocida nPI',
    '+-+-+-+-+-': 'wtf',
    pagos: {
        tipo: 'Visa',
        'numero de la tarjeta': 1234567890,
        'fecha de caducidad de la tarjeta': 'nunca'
    }
};

unCliente['dirección del cliente'] = 'No me la sé';
//console.log(unCliente['dirección del cliente']);

//muestraCamposYValores(unCliente);

let estudiante = {
    id: 2,
    nombre: 'Pep',
    diHola: () => 'Hola!'
};

/* console.log(estudiante.nombre);
console.log(estudiante.diHola());

estudiante.edad = 87;
console.log(estudiante.edad);
estudiante.diAdios = () => 'Adéu!';
console.log(estudiante.diAdios()); */

let factura = {
    descripcion: 'Factura de ejemplo',
    precio: 100.00,
    iva: 21.00,
    subTotal: () => this.precio,
    total: function() {
        console.log(this.precio);
        return this.precio + ((this.precio * this.iva) / 100);
    }
};

console.log(factura);
console.log(factura.total());

//FUNCIONES AUXILIARES
function muestraCamposYValores(miObjeto) {
    for(campo in miObjeto) {
        if(typeof(miObjeto[campo]) == 'object') {
            muestraCamposYValores(miObjeto[campo]);
        }
        else {
            console.log(campo + ': ' + miObjeto[campo]);
        }
    }
}