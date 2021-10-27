import { CoisasQueAtacam } from "./CoisasQueAtacam";
import { Personagem } from "./Personagem";

export class DogCaramelo implements CoisasQueAtacam {
    tamanhoDoOdio: number

    constructor(tamanhoDoOdio: number) {
        this.tamanhoDoOdio = tamanhoDoOdio
    }
    atacar(personagem: Personagem): void {
        personagem.vida = personagem.vida - (this.tamanhoDoOdio * 10)
    }
}