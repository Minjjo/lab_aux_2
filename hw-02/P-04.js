function Person(name, ci, email) {
    return { name: name, ci: ci, email: email };
}
var nameData = 'Alex';
var ciData = '8539864';
var emailData = 'alexlimaequise5@gmail.com';
var Data = Person(nameData, ciData, emailData);
console.log("My name is ".concat(Data.name, ", my ci is ").concat(Data.ci, " and my email is ").concat(Data.email));
