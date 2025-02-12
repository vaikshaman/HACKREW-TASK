import { writable } from "svelte/store";

export const cart = writable([]);

// Ensure localStorage is only accessed in the browser
if (typeof window !== "undefined") {
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.set(storedCart);

  cart.subscribe((items) => {
    localStorage.setItem("cart", JSON.stringify(items));
  });
}



export const addToCart = (product) => {
    cart.update(items => {
        const existingItem = items.find(item => item.id === product.id);
        if (existingItem) {
            return items.map(item => 
                item.id === product.id 
                    ? { ...item, quantity: item.quantity + 1 } 
                    : item
            );
        }
        return [...items, { ...product, quantity: 1 }];
    });
};

export const removeFromCart = (productId) => {
    cart.update(items => {
        const existingItem = items.find(item => item.id === productId);
        if (existingItem && existingItem.quantity > 1) {
            return items.map(item => 
                item.id === productId 
                    ? { ...item, quantity: item.quantity - 1 } 
                    : item
            );
        }
        return items.filter(item => item.id !== productId);
    });
};
