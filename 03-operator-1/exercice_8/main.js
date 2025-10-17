// Exercice 8
// Écrivez votre code ici

let salaireMensuel = 500;
let loyer = salaireMensuel * 0.3;
let nourriture = salaireMensuel * 0.2;
let transport = salaireMensuel * 0.1;
let autresDepenses = 50;
    autresDepenses += 25;
let totalDepenses = (loyer + nourriture + transport + autresDepenses);
let reste = salaireMensuel - totalDepenses;

if (reste>=100){
    console.log("Budget bien géré");
}else {
    console.log("Attention budget serré");
}

let loisirs = salaireMensuel * 0.15;

let totalDepenses = loyer + nourriture + transport + autresDepenses + loisirs;

let reste = salaireMensuel - totalDepenses;

let pourcentageLoyer = (loyer / salaireMensuel) * 100;
let pourcentageNourriture = (nourriture / salaireMensuel) * 100;
let pourcentageTransport = (transport / salaireMensuel) * 100;
let pourcentageAutres = (autresDepenses / salaireMensuel) * 100;
let pourcentageLoisirs = (loisirs / salaireMensuel) * 100;

loyer = salaireMensuel * 0.3;
nourriture = salaireMensuel * 0.2;
transport = salaireMensuel * 0.1;
loisirs = salaireMensuel * 0.15;

totalDepenses = loyer + nourriture + transport + autresDepenses + loisirs;
reste = salaireMensuel - totalDepenses;

pourcentageLoyer = (loyer / salaireMensuel) * 100;
pourcentageNourriture = (nourriture / salaireMensuel) * 100;
pourcentageTransport = (transport / salaireMensuel) * 100;
pourcentageAutres = (autresDepenses / salaireMensuel) * 100;
pourcentageLoisirs = (loisirs / salaireMensuel) * 100;
