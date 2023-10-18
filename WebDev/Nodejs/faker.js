const {faker} = require('@faker-js/faker');

function generateData(){
console.log(faker.person.fullName());
console.log(faker.animal.bear());
console.log(faker.location.state());
console.log(faker.internet.email());
console.log(faker.date.past());
}
generateData();

