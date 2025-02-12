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
          <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
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
  .products {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }

  .product-card {
    border: 1px solid #ddd;
    padding: 15px;
    border-radius: 8px;
    text-align: center;
    background: white;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .product-card:hover {
    transform: translateY(-5px);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15);
  }

  .product-link {
    text-decoration: none;
    color: inherit;
    display: block;
  }

  .product-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
  }

  .product-card h3 {
    margin: 10px 0;
    font-size: 18px;
  }

  .product-card p {
    color: #555;
    font-size: 14px;
  }

  .product-card button {
    background: #ff6f61;
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 10px;
    width: 100%;
    font-weight: bold;
  }

  .product-card button:hover {
    background: #e05244;
  }

  .no-products {
    text-align: center;
    font-size: 18px;
    color: #888;
  }

  /* Success Message Styling */
  .success-message {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 150, 136, 0.9);
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    z-index: 1000;
    animation: fadeOut 3s forwards;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  @keyframes fadeOut {
    0% { opacity: 1; }
    90% { opacity: 1; }
    100% { opacity: 0; }
  }
</style>
