<script>
  import { addToCart } from '$lib/stores/cart.js';
  export let data;

  let defaultImage = "https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q="; // Fallback image

  function getImageUrl(image) {
    return image && image.endsWith(".jpg") ? image : defaultImage;
  }
</script>

<h1>All Products</h1>

{#if data.products.length > 0}
  <div class="products">
    {#each data.products as product}
      <div class="product-card">
        <img src={getImageUrl(product.image)} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
        <button on:click={() => addToCart(product)}>Add to Cart</button>
      </div>
    {/each}
  </div>
{:else}
  <p class="no-products">No products available.</p>
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
  }

  .product-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
  }

  .product-card h3 {
    margin: 10px 0;
  }

  .product-card p {
    color: #555;
  }

  .product-card button {
    background: #ff6f61;
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 10px;
  }

  .product-card button:hover {
    background: #e05244;
  }

  .no-products {
    text-align: center;
    font-size: 18px;
    color: #888;
  }
</style>
