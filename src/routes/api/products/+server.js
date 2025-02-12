import { db, products } from "$lib/server/db";
import { json } from "@sveltejs/kit";

// Fetch all products
export const GET = async () => {
  try {
    const allProducts = await db.select().from(products);
    return json(allProducts);
  } catch (error) {
    return json({ error: "Failed to fetch products" }, { status: 500 });
  }
};

// Add a new product
export const POST = async ({ request }) => {
  try {
    const formData = await request.json();

    // Input validation
    if (!formData.name || !formData.description || !formData.price || !formData.image) {
      return json({ error: "All fields are required" }, { status: 400 });
    }

    // Insert into database
    const newProduct = await db.insert(products).values({
      name: formData.name,
      description: formData.description,
      price: parseFloat(formData.price), // Ensure price is a number
      image: formData.image,
    }).returning(); // Returns the inserted product

    return json({ success: true, product: newProduct });
  } catch (error) {
    return json({ error: "Failed to add product" }, { status: 500 });
  }
};

// Delete a product
export const DELETE = async ({ url }) => {
  try {
    const id = url.searchParams.get("id");
    if (!id) {
      return json({ error: "Product ID is required" }, { status: 400 });
    }

    // Check if product exists
    const productExists = await db.select().from(products).where(products.id.eq(id)).first();
    if (!productExists) {
      return json({ error: "Product not found" }, { status: 404 });
    }

    // Delete product
    await db.delete(products).where(products.id.eq(id));
    return json({ success: true });
  } catch (error) {
    return json({ error: "Failed to delete product" }, { status: 500 });
  }
};
