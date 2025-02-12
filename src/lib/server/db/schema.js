import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

// Define the "products" table
export const products = sqliteTable("products", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  price: integer("price").notNull(),
  image: text("image").notNull(),
});
