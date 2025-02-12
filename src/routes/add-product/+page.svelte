<script>

  let name = "";
  let description = "";
  let price = "";
  let image = "";

  
  let error = "";
  let success = "";

 
  async function handleSubmit() {
   
    error = "";
    success = "";

    try {
      const response = await fetch("/add-product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, description, price, image }),
      });

      const result = await response.json();

      if (response.ok) {
       
        success = "Product added successfully!";
    
        setTimeout(() => {
          success = "";
          name = description = price = image = "";
        }, 3000);
      } else {
       
        error = result.error || "Oops! Something went wrong.";
      }
    } catch (err) {
      console.error("Failed to add product:", err);
      error = "Network error. Please try again.";
    }
  }
</script>

<style>
  @import "$lib/Components/styles/add-product.css";
</style>

<div class="add-product-container">
  <h1>Add New Product</h1>
  
  {#if error}
    <p class="error-message">{error}</p>
  {/if}
  
  {#if success}
    <p class="success-message">{success}</p>
  {/if}
  
  <form on:submit|preventDefault={handleSubmit}>
    <input 
      type="text" 
      bind:value={name} 
      placeholder="Product Name" 
      required 
    />
    <textarea 
      bind:value={description} 
      placeholder="Description"
    ></textarea>
    <input 
      type="number" 
      bind:value={price} 
      placeholder="Price" 
      required 
    />
    <input 
      type="text" 
      bind:value={image} 
      placeholder="Image URL" 
      required 
    />
    <button type="submit">Add Product</button>
  </form>
</div>
