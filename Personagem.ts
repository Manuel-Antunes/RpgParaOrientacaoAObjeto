import { Arma } from "./Arma"
import { CoisasQueAtacam } from "./CoisasQueAtacam"

export class Personagem implements PersonagemBuilder, CoisasQueAtacam {
    public nome: string
    public idade: number
    public forca: number
    public con: number
    public dex: number
    public inte: number
    public sab: number
    public car: number
    public vida: number
    public armaEquipada?: Arma

    constructor(props: PersonagemBuilder) {
        Object.assign(this, props)
        this.nome = 'P-' + props.nome
        this.vida = this.calcularVida(props.con, props.forca)
    }

    private calcularVida(con: number, forca: number): number {
        return Math.ceil((con + forca) / 2)
    }

    public atacar(personagem: Personagem) {
        if (this.verificarSeEstaArmado) {
            this.armaEquipada.atacar(personagem)
        } else {
            console.log('você não está com arma equipada seu imbecil');
        }
    }

    protected verificarSeEstaArmado(): boolean {
        return !!this.armaEquipada
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
