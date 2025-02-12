import { writable } from "svelte/store";

export const cart = writable([]);


if (typeof window !== "undefined") {

  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.set(storedCart);
//   console.log("Initial cart contents:", storedCart);

  
  cart.subscribe((items) => {
    console.log(" Saving cart to localStorage:", items);
    localStorage.setItem("cart", JSON.stringify(items));
  });
}


export const addToCart = (product) => {
  console.log(" Adding to cart:", product);
  cart.update(items => {
    const existingItem = items.find(item => item.id === product.id);
    if (existingItem) {
      console.log(" Product already in cart, updating quantity");
      return items.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      );
    }
    console.log(" Adding new product to cart");
    return [...items, { ...product, quantity: 1 }];
  });
};


export const removeFromCart = (productId) => {
  console.log(" Removing from cart, product ID:", productId);
  cart.update(items => {
    const existingItem = items.find(item => item.id === productId);
    if (existingItem && existingItem.quantity > 1) {
      console.log(" Decreasing quantity for product");
      return items.map(item => 
        item.id === productId 
          ? { ...item, quantity: item.quantity - 1 } 
          : item
      );
    }
    console.log(" Removing product from cart");
    return items.filter(item => item.id !== productId);
  });
};


export const getCartTotal = () => {
  let total = 0;
  cart.subscribe(items => {
    total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  })();
//   console.log(" Cart total:", total);
  return total;
};

