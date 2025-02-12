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

// Function to add an item to the cart
export function addToCart(product) {
  cart.update((items) => [...items, product]);
}

// Function to remove an item from the cart
export function removeFromCart(productId) {
  cart.update((items) => items.filter((item) => item.id !== productId));
}
