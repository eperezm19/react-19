interface Person {
  firstName: string;
  lastName: string;
  age: number;
  address: Address;
}

interface Address {
  country: string;
  city: string;
}

const person: Person = {
  firstName: "Juan",
  lastName: "O'Neill",
  age: 20,
  address: {
    country: "United States",
    city: "New York",
  },
};

// Operador spread ... solo rompe la referencia, no crea una nueva instancia
const person2 = { ...person };
person2.firstName = "Juan";
person2.address.city = "Los Angeles";
person2.address.country = "United States";

console.log({ person });
console.log({ person2 });

// Crear un clon de un objeto con una nueva referencia
const person3 = structuredClone(person);
person3.firstName = "Juan";
person3.address.city = "Los Angeles";
person3.address.country = "United States";

console.log({ person });
console.log({ person3 });
