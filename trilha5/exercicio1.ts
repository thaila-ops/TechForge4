
// 1. Sistema de Tarefas e Projetos
// Implemente uma classe abstrata TaskManager que represente um sistema de gerenciamento de tarefas. Ela deve ter um método abstrato addTask(task: string): void e outro listTasks(): string[].

// Crie duas subclasses: Project e DailyTasks.
// Project deve permitir adicionar tarefas específicas de um projeto e retornar uma lista de todas as tarefas do projeto.
// DailyTasks deve permitir adicionar tarefas diárias e listar as tarefas adicionadas.
// Cada tarefa deve ser única; implemente uma lógica que evite tarefas duplicadas.
// Dica: para diferenciar as tarefas e dizer se ela são de projetos ou diárias, utilizem objetos


abstract class TaskManager {
    abstract addTask(task: string): void;
    abstract listTasks(): string[];
}

class Project extends TaskManager {
    private tasks: Set<string> = new Set(); // evita duplicados

    addTask(task: string): void {
        this.tasks.add(`Projeto: ${task}`);
    }

    listTasks(): string[] {
        return Array.from(this.tasks);
    }
}

class DailyTasks extends TaskManager {
    private tasks: Set<string> = new Set(); 

    addTask(task: string): void {
        this.tasks.add(`Diária: ${task}`);
    }

    listTasks(): string[] {
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
