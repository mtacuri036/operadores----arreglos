//------------LABORATORIO 4 MATEO TACURI ------------------
//-------------ARREGLOS Y OPERADORES ----------------------

// TEAM Mateo Tacuri
// Pagina elegida: Perfil de LinkedIn

const perfilMateo = [
    {
      name: "Mateo",
      lastname: "Tacuri",
      age: 21,
      nationality: "Ecuatoriano",
      location: "Quito, Ecuador",
      education: "Escuela Politecnica Nacional",
      },
  ];

  const newPerfilMateoFront = perfilMateo.map((pe) => {
    return {
      name: pe.name,
      lastname: pe.lastname,
      age: pe.age,
      nationality: pe.nationality,
      location: pe.location,
      education: pe.education,
    };
  });
  
  console.log(newPerfilMateoFront);
  
  // ----------ARREGLOS-----------
  
  const conocimientos = ["Pythons", "Java", "C++", "HTML"];
  const [
    conocimiento1,
    conocimiento2,
    conocimiento3,
    conocimiento4,
  ] = conocimientos;
  console.log(conocimiento1);
  
  const aptitudesMateot = [
    "Liderazgo",
    "Resolucion de Problemas",
    "Preparacion Constante",
    "Pensamiento Logico",
  ];
  aptitudesMateot.length >= 5 ? console.log("Aptitudes Completas") : console.log("Se puede agregar otra aptitud");
  
  let result = aptitudesMateot.find((aptitud) => aptitud === "Comunicacion Versatil");
  result ? console.log("Esta aptitud ya existe") : console.log("La aptitud no existe");
  
  let filterAptitude = aptitudesMateot.filter((aptitud) => aptitud.startsWith("R"));
  console.log("filterAptitude");
  
  aptitudesMateot.includes("Pensamiento Logico") ? console.log("Enlistar aptitud") : console.log("No se encontraron resultados para esa aptitud");