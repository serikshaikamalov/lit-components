/**
 * This singleton EventEmitter can be used throughout your application to handle custom events.
 */
export class BasketStorage extends EventTarget {
    items = []
    static instance

    static getInstance() {
        if (!BasketStorage.instance) {
            BasketStorage.instance = new BasketStorage();
        }
        return BasketStorage.instance;
    }

    addItem(item) {
        this.items = [...this.items, item]
        this.dispatchEvent(new CustomEvent("updated", { detail: { item } }))
    }
    getItems() {
        return this.items
    }
}

const basketStorage = BasketStorage.getInstance();
export default basketStorage


