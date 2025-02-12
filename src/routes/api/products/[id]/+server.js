import { json } from '@sveltejs/kit';
import db from '$lib/server/db';  // ✅ Make sure this path is correct

export async function GET({ params }) {
    try {
        const id = parseInt(params.id);

        if (isNaN(id)) {
            console.error("Invalid product ID:", params.id);
            return json({ error: 'Invalid product ID' }, { status: 400 });
        }

        const product = await db.products.findUnique({  // ✅ Correct table name
            where: { id }
        });

        if (!product) {
            console.error(`Product not found with ID: ${id}`);
            return json({ error: 'Product not found' }, { status: 404 });
        }

        return json(product);
    } catch (error) {
        console.error("Database fetch error:", error);
        return json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
