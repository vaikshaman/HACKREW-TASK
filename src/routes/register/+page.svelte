<script>
  import { user } from "$lib/stores/user.js";
  import { goto } from "$app/navigation";

  let username = "";
  let password = "";

  function register() {
    if (username && password) {
      user.set({ name: username });
      localStorage.setItem("user", JSON.stringify({ name: username }));
      goto("/login");
    }
  }
</script>

<div class="register-container">
  <h1>Register</h1>
  <form on:submit|preventDefault={register}>
    <input type="text" bind:value={username} placeholder="Username" required />
    <input type="password" bind:value={password} placeholder="Password" required />
    <button type="submit">Register</button>
  </form>
  <p>Already have an account? <a href="/login">Login</a></p>
</div>
<style>
 @import "$lib/Components/styles/register.css";
</style>
