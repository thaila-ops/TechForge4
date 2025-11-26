/*2. Inventário de Itens
Crie uma classe abstrata Inventory que gerencie um inventário de itens. Ela deve ter métodos abstratos addItem(item: string, quantity: number): void, removeItem(item: string): void e getInventory(): Record<string, number>. Dica: ver tipagem com Record para objetos com TypeScript

Crie duas subclasses WarehouseInventory e StoreInventory.
WarehouseInventory deve ter a capacidade de armazenar quantidades grandes e controlar os itens de forma genérica.
StoreInventory deve ter um limite de quantidade por item (máximo 10 unidades) e impedir que itens ultrapassem esse limite.
Ambos os inventários devem retornar uma lista de itens com suas quantidades disponíveis.*/

abstract class Inventory {
    abstract addItem(item: string, quantity: number): void;
    abstract removeItem(item: string): void;
    abstract getInventory(): Record<string, number>;
}

class WarehouseInventory extends Inventory {
    private inventory: Record<string, number> = {};

    addItem(item: string, quantity: number): void {
        this.inventory[item] = (this.inventory[item] || 0) + quantity;
    }

    removeItem(item: string): void {
        delete this.inventory[item];
    }

    getInventory() {
        return this.inventory;
    }
}

class StoreInventory extends Inventory {
    private inventory: Record<string, number> = {};

    addItem(item: string, quantity: number): void {
        const atual = this.inventory[item] || 0;
        const novoTotal = Math.min(atual + quantity, 10); 
        this.inventory[item] = novoTotal;
    }

    removeItem(item: string): void {
        delete this.inventory[item];
    }

    getInventory() {
        return this.inventory;
    }
}


const loja = new StoreInventory();
loja.addItem("Café", 15);
console.log(loja.getInventory());
