import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import { products } from "./schema.js";


const sqlite = new Database("local.db");
console.log(" SQLite database initialized: local.db");

export const db = drizzle(sqlite);
console.log(" Drizzle ORM connected to the database");


export async function addProduct({ name, description, price, image }) {
    console.log(" Adding product:", { name, description, price, image });

    try {
     
        await db.insert(products).values({ name, description, price, image }).run();
        console.log(" Product added successfully:", { name, description, price, image });

       
        return { name, description, price, image };
    } catch (error) {
      
        console.error(" Database Error:", error);
        throw new Error("Database insertion failed");
    }
}


export { products };
