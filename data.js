//=========================================================
//data.js: Les données du site (aucune API, tout est local)
// Données FICTIVES créés pour l'exercice.
// Pour changer le site, modifie les valeurs, ci-dessous, 
// enregistre, puis recharge la page. 
//=========================================================

const joueur= {
    nom: "Samuel Ndiaye" , 
    club:"FC Horizon (club fictif)",
    poste: "Attaquant",
    numéro: 9, 
    age: 22,
    taille:"1,82m",
    piedFort: "Droit"
};
// Une ligne par saison. Les noms de colonnes sont utilisés dans script.js.

const saisons= [
 { saison: "2021-2022, compétition: Championnat U19", matchs: 22, minutes: 1580,
   buts: 6, passes: 3, tirs: 38, tirsCadres: 17 },

 { saison: "2022-2023, compétition: Regional 1", matchs: 28, minutes: 2015,
   buts: 9, passes: 4, tirs: 52, tirsCadres: 25 },

 { saison: "2023-2024, compétition: Regional 1", matchs: 31, minutes: 2410,
   buts: 14, passes: 6, tirs: 71, tirsCadres: 36 },

 { saison: "2024-2025, compétition: National 2", matchs: 30, minutes :2490,
   buts: 16, passes: 3, tirs: 38, tirsCadres: 17 },

 { saison: "2025-2026, compétition: ligue 1", matchs: 19, minutes: 1590,
   buts: 17, passes: 8, tirs: 84, tirsCadres: 45 },

 { saison: "2025-2026, compétition: ligue 1", matchs: 10, minutes: 780,
   buts: 8, passes: 8, tirs: 18, tirsCadres: 15 }
];

// Pour être honnête avec le visteur: d'où viennent les données ? 

const sources= {
   type: "Données fictives créées pour l'exercice, sans aucun lien avec un joueur réél",
   Date: "13 Novembre 2026",
   Limites: [
     "Quatre saisons seulement.", 
     "Aucune information sur le niveau des adversaires.",
     "Les chiffres ne permettent pas de tirer de conclusion sportive réelle."
 ]
};




