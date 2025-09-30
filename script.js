const nom = "Donovan";
let age = 18;
console.log(nom,age)

if (age < 13) {
    console.log("Accès interdit aux moins de 13 ans.");
} else if (age < 18) {
    console.log("Vous pouvez accéder à la section ado.");
} else {
    console.log("Bienvenue dans l'espace adulte.");
}

for (let i = 0; i < 11; i++) {
    console.log("Cal: " + 7*[i]);
}

const saluer = (prenom) => {
    return "Bonjour, " + prenom + " ! Comment vas-tu ?";
};

console.log(saluer("jeannot"));