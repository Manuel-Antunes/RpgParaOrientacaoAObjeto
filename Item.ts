export class Item {
    nome: string
    peso: number
    valor: number
    descricao: string
    constructor(props: ItemBuilder) {
        Object.assign(this, props)
    }
}

export interface ItemBuilder {
    nome: string
    peso: number
    valor: number
    descricao: string
}