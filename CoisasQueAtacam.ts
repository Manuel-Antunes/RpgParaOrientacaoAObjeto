import { Personagem } from "./Personagem";

export interface CoisasQueAtacam {
    atacar(personagem: Personagem): void;
}