function GREETING(name, firstSurname, secondSurname,) {
    return name + " " + firstSurname + " " + secondSurname;
}

const name = 'ALEX';
const firstSurname = 'LIMA';
const secondSurname = 'EQUISE';

const fullname = GREETING(name, firstSurname, secondSurname);
console.log(`Hello  ${fullname} how are you`);