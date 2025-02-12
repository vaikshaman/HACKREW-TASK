<script>
  import { cart, addToCart, removeFromCart } from "$lib/stores/cart.js";
  import "$lib/Components/styles/cart.css"; // Importing CSS
</script>

<div class="cart-container">
  <h1>Your Cart</h1>
  {#if $cart.length > 0}
    <ul class="cart-list">
      {#each $cart as item}
        <li class="cart-item">
          <span>{item.name} - ${item.price}</span>
          <button class="remove-button" on:click={() => removeFromCart(item.id)}>Remove</button>
        </li>
      {/each}
    </ul>
  {:else}
    <p class="empty-cart">Your cart is empty.</p>
  {/if}
</div>
