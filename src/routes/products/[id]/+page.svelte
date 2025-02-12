<script>
  import { addToCart } from "$lib/stores/cart.js";
  import { goto } from "$app/navigation";

  export let data;
  let { product } = data;

  let defaultImage = "https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q=";

  function goBack() {
    history.back();
  }
</script>

<div class="container">
  <button class="back-button" on:click={goBack}>⬅ Back</button>

  <div class="product-details">
    <img src={product.image || defaultImage} alt={product.name} class="product-image" />

    <div class="product-info">
      <h1>{product.name}</h1>
      <p class="description">{product.description}</p>
      <p class="price"><strong>Price:</strong> ${product.price.toFixed(2)}</p>
      
      <button class="add-to-cart" on:click={() => addToCart(product)}>🛒 Add to Cart</button>
    </div>
  </div>
</div>

<style>
 @import "$lib/Components/styles/productid.css";
</style>
