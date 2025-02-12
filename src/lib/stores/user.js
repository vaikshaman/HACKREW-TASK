import { writable } from "svelte/store";
import { browser } from "$app/environment"; // Import browser check

// Check if localStorage is available before accessing it
const initialUser = browser && localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

export const user = writable(initialUser);

// Sync user data with localStorage only on the client
if (browser) {
  user.subscribe(value => {
    if (value) localStorage.setItem("user", JSON.stringify(value));
    else localStorage.removeItem("user");
  });
}
