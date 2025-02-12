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
  .container {
    max-width: 800px;
    margin: auto;
    padding: 20px;
    text-align: center;
  }

  .back-button {
    background: none;
    border: none;
    font-size: 16px;
    color: #007bff;
    cursor: pointer;
    margin-bottom: 15px;
  }

  .back-button:hover {
    text-decoration: underline;
  }

  .product-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  }

  .product-image {
    width: 100%;
    max-width: 400px;
    border-radius: 8px;
  }

  .product-info {
    text-align: center;
    margin-top: 20px;
  }

  h1 {
    color: #333;
    font-size: 24px;
    margin-bottom: 10px;
  }

  .description {
    font-size: 16px;
    color: #555;
    margin-bottom: 10px;
  }

  .price {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
  }

  .add-to-cart {
    background: #ff6f61;
    color: white;
    border: none;
    padding: 12px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    transition: background 0.2s;
  }

  .add-to-cart:hover {
    background: #e05244;
  }
</style>
