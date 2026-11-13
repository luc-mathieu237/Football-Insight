/* ==========================================================

Script.js : rend le site vivant

============================================================*/

 

/* Function */

 

function total(liste,champ) {

    let somme =0;

    for (const saison of liste){

        somme= somme + saison[champ];  

    }

    return somme;

}

 

function formaterNombre(nombre){

    return nombre.toFixed(2).replace(".",",");

}

 

/* Pages Profil: Les ciffres clés */

const zoneChiffres = document.querySelector("#chiffres");

if (zoneChiffres){

    const matchs=total(saisons,"matchs");

    const buts= total(saisons,"buts");

   

    const chiffres=[

        {valeur:matchs,texte:"matchs Joués"},

        {valeur:buts,texte:"buts marqués"},

        {valeur:total(saisons,"passes"), texte:"passes décisives"},

        {valeur:formaterNombre(buts/matchs), texte: "but par match en moyenne"}

 

    ] ;

 

 

    for(const element of chiffres){

        const bloc = document.createElement("div");

        bloc.className="chiffres";

       

        const grand = document.createElement("strong");

        grand.textContent= element.valeur;

 

        const petit =document.createElement("span");

        petit.textContent= element.texte;

 

        bloc.appendChild(grand);

        bloc.appendChild(petit);

        zoneChiffres.appendChild(bloc)

   

    }

}

 

/*page statistiques: les elements de la page et le tableau */

 

const corps = document.querySelector("#corps-tableau");

const zoneGraphique = document.querySelector("#graphique");

const zoneResume = document.querySelector("#resume");

const zoneFiltres = document.querySelector("#filtres");

const choixIndicateur = document.querySelector("#indicateur");

const zoneSource = document.querySelector("#source");

 

function afficherTableau(liste){

    corps.textContent= "";

    for(const saison of liste){

        const ligne = document.createElement("tr");

        const valeurs = [saison.saison, saison.competition, saison.matchs, saison.buts, saison.passes,saison.tirsCadres];

 

        for(const valeur of valeurs){

            const cellule = document.createElement("td");

            cellule.textContent = valeur;

            ligne.appendChild(cellule);

        }

        corps.appendChild(ligne);

    }

}

 

/* le graphique en barres, sans bibliotheque */

 

function afficherGraphique(liste, champ){

 

    zoneGraphique.textContent ="";

 

    let maximum =0;

    for(const saison of liste){

        if(saison[champ]> maximum){

            maximum = saison[champ];

        }

    }

 

    if(maximum === 0){

        maximum= 1;

    }

 

    for(const saison of liste){

        const ligne = document.createElement("div");

        ligne.className = "barre-ligne";

 

        const nom = document.createElement("span");

        nom.textContent = saison.saison;

        const piste = document.createElement("div");

        piste.className="piste";

 

        const barre = document.createElement("div");

        barre.className="barre";

        piste.appendChild(barre);

 

        const valeur = document.createElement("span");

        valeur.className="valeur";

 

        ligne.appendChild(nom);

        ligne.appendChild(piste);

        ligne.appendChild(valeur);

        zoneGraphique.appendChild(ligne);

 

        const largeur = (saison[champ] /maximum) * 100;

        setTimeout(function(){

             barre.style.width = largeur + "%";

        }, 50);

 

    }

}

 

function afficherResumee(liste){

    const matchs = total(liste, "matchs");

    const buts = total(liste, "buts");

    zoneResume.textContent= buts + "buts en " + matchs + "matchs, soit " + formaterNombre(buts/matchs) + "but par match." ;

}

 

 

/* 5. Filtres : tout mettre en relation */

 

let saisonChoisie = "toutes";

 

 

 

function listeFiltree() {

 

  if (saisonChoisie === "toutes") {

 

    return saisons;

 

  }

 

  const resultat = [];

 

  for (const saison of saisons) {

 

    if (saison.saison === saisonChoisie) {

 

      resultat.push(saison);

 

    }

 

  }

 

  return resultat;

 

}

 

 

 

function mettreAJour() {

 

  const liste = listeFiltree();

 

  afficherTableau(liste);

 

  afficherGraphique(liste, choixIndicateur.value);

 

  afficherResume(liste);

 

 

 

  const boutons = document.querySelectorAll(".filtre");

 

  for (const bouton of boutons) {

 

    bouton.setAttribute("aria-pressed", bouton.dataset.saison === saisonChoisie);

 

  }

 

}

 

 

 

function creerBoutonFiltre(texte, valeur) {

 

  const bouton = document.createElement("button");

 

  bouton.type = "button";

 

  bouton.className = "filtre";

 

  bouton.textContent = texte;

 

  bouton.dataset.saison = valeur;

 

  bouton.addEventListener("click", function () {

 

    saisonChoisie = valeur;

 

    mettreAJour();

 

  });

 

  zoneFiltres.appendChild(bouton);

 

}

 

 

 

/* 6. Démarrage : seulement sur la page statistiques */

 

if (corps) {

 

  creerBoutonFiltre("Toutes les saisons", "toutes");

 

  for (const saison of saisons) {

 

    creerBoutonFiltre(saison.saison, saison.saison);

 

  }

 

  choixIndicateur.addEventListener("change", mettreAJour);

 

  zoneSource.textContent = sources.type + " Consulté le " + sources.date + ". " +

 

    sources.limites.join(" ");

 

  mettreAJour();

 

}