import { Arma } from "./Arma";
import { CoisasQueAtacam } from "./CoisasQueAtacam";
import { DogCaramelo } from "./DogCaramelo";
import { Personagem } from "./Personagem";

const armaDoJubileu = new Arma({ dano: 10, descricao: 'sla man', nome: 'arminha top', peso: 10, valor: 100 });
const dogMaldito = new DogCaramelo(4);
const personagemPorConstrutor = new Personagem({ car: 25, con: 10, dex: 10, forca: 5, idade: 18, inte: 20, nome: 'Jubileu', sab: 2, armaEquipada: armaDoJubileu });
const personagemPorConstrutor1 = new Personagem({ con: 10, car: 25, dex: 10, forca: 5, idade: 18, inte: 20, nome: 'Carlos', sab: 2 });
console.log(personagemPorConstrutor1.vida);
personagemPorConstrutor.atacar(personagemPorConstrutor1);
console.log(personagemPorConstrutor1.vida);
const coisasQueAtacam: CoisasQueAtacam[] = [personagemPorConstrutor, armaDoJubileu, dogMaldito]
coisasQueAtacam.forEach(elemento => {
    elemento.atacar(personagemPorConstrutor1);
})