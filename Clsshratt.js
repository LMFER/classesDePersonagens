class Hero {
    constructor(nome, idade, classh) {
        this.nome = nome;
        this.idade = idade;
        this.classh = classh;
        this.ataque = ''; // Inicializando a propriedade ataque
    }

    atacar() {
        if (this.classh === "Mago") {
            this.ataque = 'Magia';
        } else if (this.classh === "Guerreiro") {
            this.ataque = 'Espada';
        } else if (this.classh === "Monge") {
            this.ataque = "Artes Marciais";
        } else if (this.classh === "Ninja") {
            this.ataque = 'Shuriken';
        } else {
            console.log("Comando inválido");
        }
    }

    codigo() {
        console.log(`O player ${this.nome} da classe ${this.classh} atacou usando ${this.ataque}`);
    }
}

let heroiMago = new Hero("Matheus", 29, "Mago");
let heroiGuerreiro = new Hero("Luana", 27, "Guerreiro");
let heroiNinja = new Hero("Gabriel", 27, "Ninja");
let heroiMonge = new Hero("Livia", 22, "Monge");

heroiNinja.codigo();
heroiNinja.atacar();
heroiNinja.codigo();

heroiMago.atacar();
heroiMago.codigo();

heroiMonge.atacar();
heroiMonge.codigo();

heroiGuerreiro.atacar();
heroiGuerreiro.codigo();
