import { writable } from "svelte/store";
import { browser } from "$app/environment"; 


const initialUser = browser && localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

export const user = writable(initialUser);


if (browser) {
  user.subscribe(value => {
    if (value) localStorage.setItem("user", JSON.stringify(value));
    else localStorage.removeItem("user");
  });
}
