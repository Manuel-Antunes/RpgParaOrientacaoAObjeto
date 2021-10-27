import { Arma } from "./Arma";
import { Personagem } from "./Personagem";

class PersonagemAmbidestro extends Personagem {
    public segundaArmaEquipada?: Arma;
    public verificarSeEstaComAsDuasArmas() {
        return this.verificarSeEstaArmado() && this.verificarSeEstaComASegundaArma()
    }
    private verificarSeEstaComASegundaArma(): boolean {
        return !!this.segundaArmaEquipada
    }
}