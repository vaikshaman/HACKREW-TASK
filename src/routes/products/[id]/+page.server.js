import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {
    try {
        const res = await fetch(`/api/products/${params.id}`);

        if (!res.ok) {
            const errData = await res.json();
            console.error("Product fetch error:", errData);
            throw error(res.status, errData.error || "Failed to load product");
        }

        const product = await res.json();
        return { product };
    } catch (err) {
        console.error("Unexpected error in +page.server.js:", err);
        throw error(500, "An unknown error occurred.");
    }
}
