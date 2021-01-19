// class Personnage {
//     constructor(nom, prenom, age, taille) {
//         this.nom = nom;
//         this.prenom = prenom;
//         this.age = age;
//         this.taille = taille;
//         this.carac = () => {
//             return `Salut moi c'est ${this.nom} ${this.prenom} j'ai ${this.age}ans je mesure ${this.taille}`; 
//         }
//     }
// }

// let dodo = new Personnage('arthur', 'deloin', 28, 188);
// let koko = new Personnage('judith', 'hash', 22, 168);
// let momo = new Personnage('lucy', 'pada', 30, 158);
// console.log(dodo.carac());
// console.log(koko.carac());
// console.log(momo.carac());

                // 2 //

// class Perso {
//     constructor(age, nom, ville) {
//         this.age = age;
//         this.nom = nom;
//         this.ville = ville;
//         this.sePresenter = () => {
//             console.log(`Bonjour, je m'appelle ${this.nom}`);
//         }
//     }
// }
// let personne1 = new Perso(30, 'Richard', 'Anvers');
// let personne2 = new Perso(31, 'Marc', 'Bruxelles');
// // # Exo 2.1
// // - Rajouter la method sePresenter à la class Personnage qui console.log "Bonjour, je m'appelle [nom-de-la-personne] !"
// // Lancer cette méthode sur les deux instances de l'exo2
// console.log(personne1.sePresenter());
// console.log(personne2.sePresenter());

                // 3 // 

class lieux {
    constructor(nom, contenue, ingredient) {
        this.nom = nom;
        this.contenue = contenue;
        this.ingredient = ingredient;
    }
}
let maison = new lieux('maison', [],)
let epicerie = new lieux('epicerie', [], [])
let cuisine = new lieux('cuisine', [], [])


class ingredient {
    constructor(nom, etat, prix) {
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
    }
}
let poivron = new ingredient('poivron', 'entier', 1)
let oignon = new ingredient('oignon', 'entier', 2)
let oeuf = new ingredient('oeuf', 'entier', 4)
let epice = new ingredient('epice', 'moulu', 3.25)
let paprika = new ingredient('paprika', 'moulu', 1.6)


                            // 4 //
class objet {
    constructor(nom, prix) {
        this.nom = nom;
        this.prix = prix;
    }
}
let objet1 = new objet('choco', 2)
let objet2 = new objet('gum', 3)

let tab = [objet1, objet2]

class Personnage {

}




// correction //

//1
// let monTab = [];
// class Personne {
//     constructor(nom, prenom, age, taille){
//         this.nom = nom;
//         this.prenom = prenom;
//         this.age = age;
//         this.taille = taille;
//         // monTab.push({nom, prenom, age, taille})
//     }
//     saluer(){
//         console.log(`Bonjour ${this.nom} ${ayhan.prenom}`);
//     }
// }

// let ayhan = new Personne("caliskan", "ayhan", 23, "178")
// // console.log(`Bonjour ${ayhan.nom} ${ayhan.prenom}`);
// let test = new Personne("nomTest", "prenomTest", 24, "178")
// let test2 = new Personne("luc", "jean", 25, "178")
// ayhan.saluer()

// console.log(monTab);
// let monTab = [ayhan, test, test2]
// monTab.forEach(element => {
//     console.log(element.prenom);
//     // console.log(`Bonjour ${element.nom}`);
// });

//2
// class Personnage {
//     constructor( prenom, age, ville){
//         this.prenom = prenom;
//         this.age = age;
//         this.ville = ville;
//     }
//     sePresenter(){
//         console.log(`Bonjour ${this.prenom}`);
//     }
// }
// let perso1 = new Personnage ('ayhan', 23, 'Bruxelles');
// let perso2 = new Personnage ('perso2', 24, 'Bruxelles');
// console.log(perso1);
// perso2.sePresenter()

//3

class Lieu {
    constructor(nom, contenu, ingredient){
        this.nom = nom;
        this.contenu = contenu;     // push, sort
        this.ingredient = ingredient;   
    }
}

let maison = new Lieu('maison', [], [])
console.log(maison);

class Ingredient {
    constructor(nom, etat, prix){
        this.nom = nom;
        this.etat = etat;
        this.prix = prix
    }
}
let oeuf = new Ingredient('oeuf', 'entier', 1.50)
console.log(oeuf);


class Personne3 {
    constructor(nom, lieu, argent, panier){
        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.panier = panier
    }
    seDeplacer(lieu){
        this.lieu = lieu.nom

        lieu.contenu.push(this)
        console.log(`${this.nom} se déplace vers ${lieu.nom}`);
    }
    payer(ingrédient){
        if (this.argent >= ingrédient.prix ) {
            this.argent -= ingrédient.prix
            this.panier.push(ingrédient)
            console.log(`Mon panier : ${this.panier[0].nom} \n argent restant : ${this.argent}`);
        } else {
            console.log(`Pas assez d'argent`);
        }
    }
    couper(ingredient){
        ingredient.etat = "coupé"
        console.log(`${ingredient.nom} est maintenant ${ingredient.etat}`);
    }
}


let maxime = new Personne3('maxime', 'neant', 100, [])
console.log(maxime);

maxime.seDeplacer(maison)
maxime.payer(oeuf)
maxime.couper(oeuf)

//4 

class Objet {
    constructor(nom,prix){
        this.nom = nom;
        this.prix = prix;
    }
}
let gsm = new Objet('gsm', 600);
let bic = new Objet('bic', 100);

let boite = [gsm, bic];

class Personne4 {
    constructor(nom, sac, argent){
        this.nom = nom;
        this.sac = sac;
        this.argent = argent;
    }
    prendre(objet){
        this.sac.push(objet)
        boite.splice(boite.indexOf(objet), 1)
    }
    acheter(vendeur, objet){
        this.argent -= objet.prix
        vendeur.argent += objet.prix

        this.sac.push(objet)
        vendeur.sac.splice(vendeur.sac.indexOf(objet),1)
    }
}


let elias = new Personne4('elias', [], 800);
let max = new Personne4('max', [], 1000);


// elias.prendre(bic)
// max.acheter(elias, bic)

// console.log(max);
// console.log(elias);
// console.log(boite);