import { NextApiRequest, NextApiResponse } from "next";
import stockPrices from '../data/stock-price';
import products from '../data/products';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { code } = req.query;

    const stock = stockPrices[code];
    if (!stock) {
        return res.status(404).json({ message: "Stock information not found." });
    }

    const product = products.find(p => p.skus.some(sku => sku.code === code));
    if (!product) {
        return res.status(404).json({ message: "Product not found." });
    }

    const formattedPrice = (stock.price / 100).toFixed(2);

    return res.status(200).json({
        product: {
            ...product,
            price: `$${formattedPrice}`,
            stock: stock.stock
        }
    });
}