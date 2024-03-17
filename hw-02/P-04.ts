function Person(name: string, ci: string, email: string): PersonDatA {
    return { name, ci, email };
}

interface PersonDatA {
    name: string;
    ci: string;
    email: string;
}

const nameData: string = 'Alex';
const ciData: string = '8539864';
const emailData: string = 'alexlimaequise5@gmail.com';

const Data = Person(nameData, ciData, emailData);

console.log(`My name is ${Data.name}, my ci is ${Data.ci} and my email is ${Data.email}`);
