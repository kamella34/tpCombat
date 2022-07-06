class Personnage {
    constructor(nom, sante, attaque) {
  
        this.nom = nom;
        this.sante = sante;
        this.attaque = attaque;
    }

    verifSante(selector) {
        if (this.sante >= 65) {
            selector.classList.add("is-success");
            selector.classList.remove("is-warning");
            selector.classList.remove("is-error");

        } else if (this.sante >= 35 && this.sante <= 65) {
            selector.classList.remove("is-success");
            selector.classList.add("is-warning");
            selector.classList.remove("is-error");

        } else if (this.sante >= 10 && this.sante <= 35) {
            selector.classList.remove("is-success");
            selector.classList.remove("is-warning");
            selector.classList.add("is-error");

        }      
    }

    majProgressBar(selector){
        /**
         * récupere le selecteur de la progress bar
         * changer la valeur selon la santé
         */
        selector.value = this.sante;
        this.verifSante(selector);
        
    }

}

class Player extends Personnage {
    constructor(nom, sante, attaque) {
        super(nom, sante, attaque);
    }
 
}
class Enemy extends Personnage {
    constructor(nom, sante, attaque) {
        super(nom, sante, attaque);
    }
  
}

export {
    Player, Enemy
}