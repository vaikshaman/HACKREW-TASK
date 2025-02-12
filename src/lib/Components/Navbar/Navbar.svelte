<script>
  import { user } from "$lib/stores/user.js";
  import { cart } from "$lib/stores/cart.js";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import "$lib/Components/styles/navbar.css";

  let isMenuOpen = false;
  let isUserMenuOpen = false;


  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };

  
  const toggleUserMenu = () => {
    isUserMenuOpen = !isUserMenuOpen;
  };


  const logout = () => {
    user.set(null);
    localStorage.removeItem("user");
    goto("/login");
  };
</script>

<nav class="navbar">

  <a href="/" class="logo">E-Shop</a>

  
  <div class="nav-links">
    <a href="/products" class="nav-button">Products</a>
    <a href="/add-product" class="nav-button">Add Product</a>
    <a href="/cart" class="cart-button">
      🛒 Cart <span class="cart-count">{$cart.length}</span>
    </a>
  </div>


  <div class="user-menu">
    {#if $user}
      <!-- Logged-in state -->
      <button on:click={toggleUserMenu} class="user-menu-button">
        👤 {$user.name} ▼
      </button>
      {#if isUserMenuOpen}
        <div class="user-dropdown">
          <button class="logout-button" on:click={logout}>🚪 Logout</button>
        </div>
      {/if}
    {:else}
      <!-- Guest state -->
      <a href="/login" class="login-button">Login</a>
      <a href="/register" class="register-button">Register</a>
    {/if}
  </div>
</nav>
