"use strict";
// 4. Sistema de Votação
// Crie uma classe abstrata VoteSystem que gerencie votos em uma competição. Ela deve ter métodos abstratos voteFor(candidate: string): void e getResults(): object.
Object.defineProperty(exports, "__esModule", { value: true });
// Crie duas subclasses: Election e Poll.
// Election deve permitir adicionar votos para um candidato específico e retornar o total de votos por candidato em um objeto.
// // Poll deve retornar uma lista dos candidatos em ordem de votos (do mais votado para o menos votado).
class VoteSystem {
}
class Election extends VoteSystem {
    constructor() {
        super(...arguments);
        this.votes = {};
    }
    voteFor(candidate) {
        this.votes[candidate] = (this.votes[candidate] || 0) + 1;
    }
    getResults() {
        return this.votes;
    }
}
class Poll extends VoteSystem {
    constructor() {
        super(...arguments);
        this.votes = {};
    }
    voteFor(candidate) {
        this.votes[candidate] = (this.votes[candidate] || 0) + 1;
    }
    getResults() {
        return Object.entries(this.votes)
            .sort((a, b) => b[1] - a[1])
            .map(([cand, votos]) => ({ candidato: cand, votos }));
    }
}
const pesquisa = new Poll();
pesquisa.voteFor("Ana");
pesquisa.voteFor("Ana");
pesquisa.voteFor("João");
console.log(pesquisa.getResults());
//# sourceMappingURL=Votacao.js.map