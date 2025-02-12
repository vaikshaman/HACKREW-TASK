import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import { products } from "./schema.js";

// Initialize SQLite database
const sqlite = new Database("local.db");
export const db = drizzle(sqlite);

// Function to insert a new product
export async function addProduct({ name, description, price, image }) {
    try {
        await db.insert(products).values({ name, description, price, image }).run();
        return { name, description, price, image }; // Return inserted product
    } catch (error) {
        console.error("🔥 Database Error:", error);
        throw new Error("Database insertion failed");
    }
}

export { products };
