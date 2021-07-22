import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  sum(): number {
    return this._items.reduce((sum, item) => sum + item.price, 0);
  }

  totalSum(discount: number): number {
    return this.sum() * discount / 100;
  }

  deleteItem(id: number): void {
    const index = this._items.findIndex(item => item.id === id);
    this._items.splice(index, 1);
  }
}
