<script>
  import { user } from "$lib/stores/user.js";
  import { addToCart } from '$lib/stores/cart.js';
  import { onMount } from 'svelte';
  
  export let data;
  let currentUser = $user; // Auto-subscription
  let addedMessage = null; // Holds the message

  let defaultImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLn15Xevt75BmPPJ9CTAXv_ShMX8RJSOoSnsT-o4YvxcQFLhRifYPnQJ6USQ-nEAwX_0A&usqp=CAU";

  function getImageUrl(image) {
    return image && image.endsWith(".jpg") ? image : defaultImage;
  }

  function handleAddToCart(product) {
    addToCart(product);
    addedMessage = `Product "${product.name}" added successfully!`;

    setTimeout(() => {
      addedMessage = null; // Clear the message after 3 seconds
    }, 3000);
  }

  onMount(() => {
    // Scroll to the bottom when the component mounts
    window.scrollTo(0, document.body.scrollHeight);
  });
</script>

<h1>Welcome to the E-Commerce Store</h1>

<h1>All Products</h1>

{#if data.products.length > 0}
  <div class="products">
    {#each data.products as product}
      <div class="product-card">
        <a href={`/products/${product.id}`} class="product-link">
          <img src={getImageUrl(product.image)} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p><strong>Price:</strong> ₹{product.price.toFixed(2)}</p>
        </a>
        <button on:click={() => handleAddToCart(product)}>Add to Cart</button>
      </div>
    {/each}
  </div>
{:else}
  <p class="no-products">No products available.</p>
{/if}

{#if addedMessage}
  <div class="success-message">{addedMessage}</div>
{/if}

<style>
 @import "$lib/Components/styles/Homepage.css";
</style>
