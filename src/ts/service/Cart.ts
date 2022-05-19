import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    totalPrice(): number {
        if (this._items.length > 0) {
            let sum: number = 0;
            this._items.forEach(a => sum += a.price);
            return sum;
        }
        return 0;
    }

    discount(dis: number): number {
        if (dis > 0 && dis <= 100) {
            return this.totalPrice() * (1 - dis / 100);
        }
        return this.totalPrice();
    }

    removeItem(id: number): void {
        let index = this._items.findIndex(a => a.id === id);
        if (index !== -1) {
            this._items.splice(index, 1);
        }
    }
}