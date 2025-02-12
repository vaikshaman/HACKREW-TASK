import { db, products } from '$lib/server/db';

export const load = async () => {
    const allProducts = await db.select().from(products);
    return { products: allProducts };
};
