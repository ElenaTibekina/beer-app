import { NextApiRequest, NextApiResponse } from 'next';
import products from '../data/products';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;

        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        const paginatedProducts = products.slice(startIndex, endIndex);

        const data = {
            previous: startIndex > 0 ? { page: page - 1, limit } : null,
            next: endIndex < products.length ? { page: page + 1, limit } : null,
            totalProducts: products.length,
            totalPages: Math.ceil(products.length / limit),
            results: paginatedProducts.length,
            products: paginatedProducts
        };

        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching products:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
}
