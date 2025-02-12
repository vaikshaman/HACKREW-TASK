
SvelteKit Shopping Cart
A simple e-commerce project built with SvelteKit.

Quick Start

# Create a new project
npx sv create my-app

# Install dependencies
cd my-app
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

Project Structure

This project follows SvelteKit conventions with the following key components:
Routing & Layouts
+layout.svelte: Main navigation
Pages:
/products: All products
/products/[id]: Single product
/cart: Shopping cart
State Management
Svelte stores for cart state
API Handling
+server.js for fetching products
Form Actions
+page.server.js for adding products
Error Handling
+error.svelte for error messages
Components
ProductCard.svelte: Product info
CartItem.svelte: Cart item
Authentication
Basic client-side login with local storage
Approach
Used SvelteKit's file-based routing
Implemented reactive cart using Svelte stores
Fetched products from a database
Created reusable components
Added basic error handling
Implemented simple client-side authentication
For more details on SvelteKit, check out the official documentation.
