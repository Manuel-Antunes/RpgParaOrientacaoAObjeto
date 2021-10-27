import { Item, ItemBuilder } from "./Item";

export class Armadura extends Item {
    defesa: number
    constructor(props: ArmaduraBuider) {
        super(props);
    }
}

interface ArmaduraBuider extends ItemBuilder {
    defesa: number
}