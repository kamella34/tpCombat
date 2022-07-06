// ---IMPORT----------------------------------------------------------------------------------------
// OUVRIR AVEC LIVE SERVEUR 
import { Player, Enemy } from "./class2test.js";

// -------------------------------------------------------------------------------------------
let newEnemy;
let urlImg = "assets/img/";

let direction;
// -------------------------------------------------------------------------------------------

//FUNCTION ---------------------------------------------------------------------------------------

function getRandomInt() {
  let randomInt =  Math.floor(Math.random() * enemyArray.length );
  console.log(randomInt);
    return randomInt;
}

// *************************
function arrowDirection() {
    direction = Math.floor(Math.random() * 100);

    console.log(direction);
    if (direction <= 50) {
        arrow.classList.add("transformPlayer");
        return true;
    } else {
        arrow.classList.add("transformEnemy")
        return false;

    }

}


let chooseWord =  Math.floor(Math.random() * 100);


let newWord;

 function word() {
    if (chooseWord < 33) {
      newWord = "AGAIN";
    }
    else if (chooseWord > 33 || chooseWord < 66) {
        newWord = "WESH";
    } else {
        newWord = "Oh Oh";
    }
  
}


// *************************

// *********utilisé direct dans le code****************
// function enemyBegin() {

//     player.sante -= newEnemy.attaque;
//     player.majProgressBar(progressHero);

//     setTimeout(function () {
//        
//         newEnemy.sante -= player.attaque;
//         newEnemy.majProgressBar(progressEnemy);
//     }, 1500);
// }

// -------------------------------------------------------------------------------------------




//intentiation? des guerriers------------------------------------------------
let enemyArray = [
    {
        "source": `${urlImg}barzork_bourrin.png`,
        "nom": "Bourrin",
        "sante": 100,
        "attaque": 12,
        "coupSpecial": 20
    },
    {
        "source": `${urlImg}barzork_brave.png`,
        "nom": "Gluton",
        "sante": 82,
        "attaque": 19,
        "coupSpecial": 40
    },
    {
        "source": `${urlImg}barzork_clone.png`,
        "nom": "Torture",
        "sante": 70,
        "attaque": 30,
        "coupSpecial": 40
    }
];
// **************************
console.log(enemyArray[0].nom);


let player = new Player("Chevalier Batman", 100, 12);

//SELECTEUR----------------------------------------------------------------------------------
let btnEnemy = document.querySelector(".btn-enemy");
let progressEnemy = document.querySelector(".progressEnemy");
let btnAdversaire = document.querySelector(".adversaire-btn");
let nomEnemy = document.querySelector(".nom-enemy");
let imgEnemy = document.querySelector(".img-enemy");
let divEnemy = document.querySelector(".divEnemy");
let blockBtnEnemy = document.querySelector(".blockBtnEnemy");
let arrow = document.querySelector(".arrow");
let attack = document.querySelector(".attack-btn");
let progressHero = document.querySelector(".progressHero");
let info = document.querySelector(".info");
let attackBtnEnemy = document.querySelector(".attack-btn-enemy");
let afficheViePlayer = document.querySelector(".affiche-vie-player");
let afficheVieEnemy = document.querySelector(".affiche-vie-enemy");
//-------------------------------------------------------------------------------------------
function dead() {

    if (newEnemy.sante < 0) {
        newEnemy.sante = 0;
        info.textContent = `${newEnemy.nom} est mort, Fin du game !!! ${player.nom} Win !!!`
    }
    if (player.sante < 0) {
        player.sante = 0;
        info.textContent = `${player.nom} est mort, Fin du game !!! ${newEnemy.nom} Win !!!`
    }
    console.log("attaque player = " + player.attaque + " ennemy santé = " + newEnemy.sante);
    console.log("attaque ennemy = " + newEnemy.attaque + " player santé = " + player.sante);
}



//ACTION DANS L'ORDRE CHRONO ----------------------------------------------------------------
info.textContent = "Pour Générer un adversaire aléatoire, clique sur le bouton jaune"
//************************************ 
btnAdversaire.addEventListener("click", function () {

    let enemyAleatoir = enemyArray[getRandomInt()];
    newEnemy = new Enemy(enemyAleatoir.nom, enemyAleatoir.sante, enemyAleatoir.attaque);
    let lienImg = enemyAleatoir.source;
    nomEnemy.textContent = newEnemy.nom;
    imgEnemy.setAttribute("src", lienImg);
    blockBtnEnemy.classList.add("disable");
    divEnemy.classList.remove("disable");

    allAction();


})
//********************************** 
function allAction() {
    let beginner = arrowDirection();
    info.textContent = `Vous allez affronter ${newEnemy.nom}`;

    if (beginner) {
        info.textContent = "Chevalier Batman, vous êtes le premier a attaquer ! Cliquez sur 'Attack'";

        attack.addEventListener("click", function () {
            newEnemy.sante -= player.attaque;
            newEnemy.majProgressBar(progressEnemy);
            info.textContent = `${newEnemy.nom} perd ${player.attaque} points ! `;

            dead();
            afficheVieEnemy.textContent = newEnemy.sante;
            console.log(newEnemy.sante);

            setTimeout(function () {
                player.sante -= newEnemy.attaque;
                player.majProgressBar(progressHero)
                info.textContent = `${newEnemy.nom} contre attaque et ${player.nom} perd ${newEnemy.attaque} points ! ${player.nom} crie  Aaaaa l'attaque ! `;
                dead();
                afficheViePlayer.textContent = player.sante;
                console.log(newEnemy.sante);
            }, 1000);
        })
    } else if (!beginner) {


        setTimeout(function () {
            info.textContent = `${newEnemy.nom} attaquera le premier !`;
            setTimeout(function () {
                player.sante -= newEnemy.attaque;
                player.majProgressBar(progressHero);
                info.textContent = `${player.nom} perd ${newEnemy.attaque} points ! ${player.nom} crie Veeeeengance !!!`;

                dead();
                afficheViePlayer.textContent = player.sante;
            }, 2000);

            attack.addEventListener("click", function () {
                newEnemy.sante -= player.attaque;
                newEnemy.majProgressBar(progressEnemy);
                info.textContent = `${newEnemy.nom} perd ${player.attaque} points !`;
                dead();
                afficheVieEnemy.textContent = newEnemy.sante;


                setTimeout(function () {
                    player.sante -= newEnemy.attaque;
                    player.majProgressBar(progressHero)
                    info.textContent = `${newEnemy.nom} contre attaque,${player.nom} perd ${newEnemy.attaque} points ${newWord} ...!`;

                    dead();
                    afficheViePlayer.textContent = player.sante;

                }, 2000);
            })

        }, 3000);

    }

}

//**************************************
