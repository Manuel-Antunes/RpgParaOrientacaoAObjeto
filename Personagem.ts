import { Arma } from "./Arma"
import { CoisasQueAtacam } from "./CoisasQueAtacam"

export class Personagem implements PersonagemBuilder, CoisasQueAtacam {
    nome: string
    idade: number
    forca: number
    con: number
    dex: number
    inte: number
    sab: number
    car: number
    vida: number
    armaEquipada?: Arma

    constructor(props: PersonagemBuilder) {
        Object.assign(this, props)
        this.nome = 'P-' + props.nome
        this.vida = Math.ceil((props.con + props.forca) / 2)
    }

    atacar(personagem: Personagem) {
        if (this.armaEquipada) {
            this.armaEquipada.atacar(personagem)
        } else {
            console.log('você não está com arma equipada seu imbecil');
        }
    }
}

interface PersonagemBuilder {
    nome: string
    idade: number
    forca: number
    con: number
    dex: number
    inte: number
    sab: number
    car: number
    armaEquipada?: Arma
}
