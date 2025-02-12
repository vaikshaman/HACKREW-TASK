<script>
  import { addToCart } from '$lib/stores/cart.js';
  export let data;

  let defaultImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLn15Xevt75BmPPJ9CTAXv_ShMX8RJSOoSnsT-o4YvxcQFLhRifYPnQJ6USQ-nEAwX_0A&usqp=CAU"; // Fallback image

  function getImageUrl(image) {
    return image && image.endsWith(".jpg") ? image : defaultImage;
  }
</script>

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
        <button on:click={() => addToCart(product)}>Add to Cart</button>
      </div>
    {/each}
  </div>
{:else}
  <p class="no-products">No products available.</p>
{/if}

<style>
 @import "$lib/Components/styles/product.css";
</style>
