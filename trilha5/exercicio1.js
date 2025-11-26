"use strict";
// 1. Sistema de Tarefas e Projetos
// Implemente uma classe abstrata TaskManager que represente um sistema de gerenciamento de tarefas. Ela deve ter um método abstrato addTask(task: string): void e outro listTasks(): string[].
Object.defineProperty(exports, "__esModule", { value: true });
// Crie duas subclasses: Project e DailyTasks.
// Project deve permitir adicionar tarefas específicas de um projeto e retornar uma lista de todas as tarefas do projeto.
// DailyTasks deve permitir adicionar tarefas diárias e listar as tarefas adicionadas.
// Cada tarefa deve ser única; implemente uma lógica que evite tarefas duplicadas.
// Dica: para diferenciar as tarefas e dizer se ela são de projetos ou diárias, utilizem objetos
class TaskManager {
}
class Project extends TaskManager {
    constructor() {
        super(...arguments);
        this.tasks = new Set(); // evita duplicados
    }
    addTask(task) {
        this.tasks.add(`Projeto: ${task}`);
    }
    listTasks() {
        return Array.from(this.tasks);
    }
}
class DailyTasks extends TaskManager {
    constructor() {
        super(...arguments);
        this.tasks = new Set();
    }
    addTask(task) {
        this.tasks.add(`Diária: ${task}`);
    }
    listTasks() {
        return Array.from(this.tasks);
    }
}
const projeto = new Project();
projeto.addTask("Construir API");
projeto.addTask("Construir API");
const dia = new DailyTasks();
dia.addTask("Estudar 1 hora");
dia.addTask("Estudar 1 hora");
console.log(projeto.listTasks());
console.log(dia.listTasks());
//# sourceMappingURL=exercicio1.js.map