import { CoisasQueAtacam } from "./CoisasQueAtacam";
import { Item, ItemBuilder } from "./Item";
import { Personagem } from "./Personagem";

export class Arma extends Item implements CoisasQueAtacam {
    dano: number
    constructor(props: ArmaBuilder) {
        super(props);
    }
    atacar(personagem: Personagem) {
        personagem.vida = personagem.vida - this.dano
    }
}

interface ArmaBuilder extends ItemBuilder {
    dano: number
}