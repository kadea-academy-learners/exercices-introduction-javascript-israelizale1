// Exercice 9
// Écrivez votre code ici


const totalHeritage = 60000000 + 40000000 + 20000000; // 120 000 000 CDF

const partPremiereCategorie = totalHeritage * 0.75; // 75%
const partDeuxiemeCategorie = totalHeritage * 0.25; // 25%

const partParEnfant = partPremiereCategorie / 3;

const paul = partParEnfant;
const marie = partParEnfant;

const alainPart = partParEnfant;
const eric = alainPart / 2;
const claire = alainPart / 2;

const partParPersonneDeuxiemeCat = partDeuxiemeCategorie / 3;

const madameMukuna = partParPersonneDeuxiemeCat;
const joseph = partParPersonneDeuxiemeCat;
const sarah = partParPersonneDeuxiemeCat;

console.log("Paul reçoit : " + paul + " CDF");
console.log("Marie reçoit : " + marie + " CDF");
console.log("Alain reçoit : " + alainPart + " CDF");
console.log("Eric reçoit : " + eric + " CDF");
console.log("Claire reçoit : " + claire + " CDF");
console.log("Madame Mukuna reçoit : " + madameMukuna + " CDF");
console.log("Joseph reçoit : " + joseph + " CDF");
console.log("Sarah reçoit : " + sarah + " CDF");