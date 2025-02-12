import { json } from '@sveltejs/kit';
import { addProduct } from '$lib/server/db';  // Import the correct function

export async function POST({ request }) {
    try {
        const { name, description, price, image } = await request.json();

        if (!name || !description || !price || !image) {
            return json({ error: 'All fields are required' }, { status: 400 });
        }

        // Store the product using the correct function
        const newProduct = await addProduct({ name, description, price, image });

        return json({ success: true, product: newProduct }, { status: 201 });

    } catch (error) {
        console.error("🔥 Server Error:", error);
        return json({ error: 'Server error', details: error.message }, { status: 500 });
    }
}
