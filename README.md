sv – SvelteKit Shopping Cart
Everything you need to build a SvelteKit project using sv.

Creating a Project
If you're seeing this, you've probably already done this step. Congrats! 🎉

bash
Copy
Edit
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
Developing
Once you've created a project and installed dependencies with npm install (or pnpm install or yarn), start a development server:

bash
Copy
Edit
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
Building
To create a production version of your app:

bash
Copy
Edit
npm run build
You can preview the production build with:

bash
Copy
Edit
npm run preview
To deploy your app, you may need to install an adapter for your target environment.

My Approach
I structured this project using SvelteKit with the following principles:

1. Routing & Layouts
Used +layout.svelte for navigation and created multiple pages (+page.svelte).
Pages:
/products → Shows all products.
/products/[id] → Displays a single product.
/cart → Shopping cart page.
2. State Management
Used Svelte stores (writable) for managing the cart state.
This makes sure the cart updates instantly across pages.
3. API Handling
Fetched products from a database using +server.js.
Handled errors properly for a smooth experience.
4. Form Actions
Implemented product addition via +page.server.js.
Works even without JavaScript.
5. Error Handling
Used +error.svelte for showing clean error messages.
6. Styling & Components
Created reusable components like:
ProductCard.svelte → Renders product info.
CartItem.svelte → Represents an item in the cart.
7. Simple Login
Implemented a basic client-side login where users enter their name.
This persists using local storage.
