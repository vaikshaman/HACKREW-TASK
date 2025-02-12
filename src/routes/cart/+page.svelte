<script>
  import { cart, addToCart, removeFromCart } from "$lib/stores/cart.js";
  import { goto } from '$app/navigation';
  import "$lib/Components/styles/cart.css"; // Importing CSS

  // Fallback image URL
  const fallbackImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLn15Xevt75BmPPJ9CTAXv_ShMX8RJSOoSnsT-o4YvxcQFLhRifYPnQJ6USQ-nEAwX_0A&usqp=CAU";

  // Function to check image URL and return fallback if necessary
  function getImageUrl(imageUrl) {
    if (imageUrl && imageUrl.toLowerCase().endsWith('.jpg')) {
      return imageUrl;
    }
    return fallbackImage;
  }

  function viewProductDetails(productId) {
    goto(`/products/${productId}`);
  }

  function calculateTotal(cartItems) {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  }
</script>

<div class="cart-container">
  <h1>Your Cart</h1>
  {#if $cart.length > 0}
    <ul class="cart-list">
      {#each $cart as item}
        <li class="cart-item">
          <img src={getImageUrl(item.image)} alt={item.name} class="product-image" />
          <div class="product-info">
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button class="view-details" on:click={() => viewProductDetails(item.id)}>
              View Details
            </button>
            <button class="remove-button" on:click={() => removeFromCart(item.id)}>
              Remove One
            </button>
          </div>
        </li>
      {/each}
    </ul>
    <div class="cart-total">
      <h2>Total: ${calculateTotal($cart)}</h2>
    </div>
  {:else}
    <p class="empty-cart">Your cart is empty.</p>
  {/if}
</div>

<style>
  .cart-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
      margin-top: 120px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }

  h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }

  .cart-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .cart-item {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ddd;
    padding: 15px 0;
    gap: 20px;
  }

  .product-image {
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    border: 1px solid #ddd;
    background-color: #fff;
  }

  .product-info {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .product-info h3 {
    margin: 0;
    font-size: 18px;
    color: #333;
  }

  .product-info p {
    margin: 0;
    font-size: 14px;
    color: #555;
  }

  .view-details,
  .remove-button {
    padding: 8px;
    border-radius: 5px;
    font-size: small;
    cursor: pointer;
    border: none;
    transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out; 
  }

  .view-details {
    background-color: #007bff;
    color: white;
  }

  .view-details:hover {
    background-color: #0056b3;
   
  }

  .remove-button {
    background-color: #ff6f61;
    color: white;
  }

  .remove-button:hover {
    background-color: #e05244;
  }

  .cart-total {
    text-align: right;
    margin-top: 20px;
    font-size: 20px;
    font-weight: bold;
  }

  .empty-cart {
    text-align: center;
    color: #777;
    font-size: 18px;
    margin-top: 20px;
  }
</style>
