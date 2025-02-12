<script>
  import { cart, addToCart, removeFromCart } from "$lib/stores/cart.js";
  import { goto } from '$app/navigation';
  import "$lib/Components/styles/cart.css";

  const fallbackImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLn15Xevt75BmPPJ9CTAXv_ShMX8RJSOoSnsT-o4YvxcQFLhRifYPnQJ6USQ-nEAwX_0A&usqp=CAU";

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
            <p>Price: ₹{item.price}</p>
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
      <h2>Total: ₹{calculateTotal($cart)}</h2>
    </div>
  {:else}
    <p class="empty-cart">Your cart is empty.</p>
  {/if}
</div>

<style>
 @import "$lib/Components/styles/cart.css";
</style>
