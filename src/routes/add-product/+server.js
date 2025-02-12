import { json } from '@sveltejs/kit';
import { addProduct } from '$lib/server/db';  

export async function POST({ request }) {
    console.log(' POST request received');
    try {
        const body = await request.json();
        // console.log(' Request body:', body);

        const { name, description, price, image } = body;


        if (!name || !description || !price || !image) {
            console.warn(' Missing required fields');
            return json({ error: 'All fields are required' }, { status: 400 });
        }

        console.log(' All required fields present');
        console.log(' Attempting to add product to database...');
      
        const newProduct = await addProduct({ name, description, price, image });

        // console.log(' Product added successfully:', newProduct);

        return json({ success: true, product: newProduct }, { status: 201 });

    } catch (error) {
        console.error(" Server Error:", error);
        console.error(" Error details:", error.stack);
        return json({ error: 'Server error', details: error.message }, { status: 500 });
    } finally {
        console.log(' POST request processing completed');
    }
}
