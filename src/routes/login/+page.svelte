<script>
  import { user } from "$lib/stores/user.js";
  import { goto } from "$app/navigation";

  let username = "";
  let password = "";

  function login() {
    if (username && password) {
      user.set({ name: username });
      localStorage.setItem("user", JSON.stringify({ name: username }));
      goto("/");
    }
  }
</script>

<div class="login-container">
  <h1>Login</h1>
  <form on:submit|preventDefault={login}>
    <input type="text" bind:value={username} placeholder="Username" required />
    <input type="password" bind:value={password} placeholder="Password" required />
    <button type="submit">Login</button>
  </form>
  <p>Don't have an account? <a href="/register">Register</a></p>
</div>

<style>
 @import "$lib/Components/styles/login.css";
</style>
