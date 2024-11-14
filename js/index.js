/*ESTUDIANTE-C
Se tiene de varios estudiantes su nombre, semestre y nota. También se sabe que la nota
máxima es 20, y que los estudiantes aprueban con un mínimo de 10.
Toda esta información de estudiantes se carga en un arreglo, y se necesita una función que
inserte un estudiante en una posición dada (siendo 0 la primera posición).
La estructura de un objeto estudiante es, p.ej.: {nombre: ‘Luis’, semestre: 5, nota: 14}
Función: insertarEstudEnPosicion.
Parámetros: estudiantes (array de objetos estudiante), nombre, semestre, nota y posición.
Retorno: array de objetos estudiante con el estudiante insertado en la posición indicada
(siendo 0 la primera posición).*/

const estudiantes = [
    { nombre: "Luis", semestre: 5, nota: 14 },
    { nombre: "Ricardo", semestre: 5, nota: 15 },
    { nombre: "Pedro", semestre: 3, nota: 16 },
    { nombre: "Ana", semestre: 6, nota: 17 },
    { nombre: "Luisa", semestre: 5, nota: 18 },
  ];

  const insertarEstudEnPosicion = (estudiantes, nombre, semestre, nota, posicion) => {
    estudiantes.splice(posicion, 0, { nombre, semestre, nota });
    return estudiantes;
  };

  let salida = document.getElementById("salida");
  salida.innerHTML = "ANTES DEL ARREGLO: "+     estudiantes.map((estudiante) => estudiante.nombre).join(", ");

  let estudiantesModificados = insertarEstudEnPosicion(estudiantes, "Alberto", 5, 14, 3);

  salida.innerHTML += "<br>LUEGO DEL ARREGLO: "+estudiantesModificados.map((estudiante) => estudiante.nombre).join(", ");


  


  
