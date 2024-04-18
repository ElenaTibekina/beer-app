import products from '../data/products';

export default function handler(req, res) {
    const { id } = req.query;

    const product = products.find((product) => product.id === parseInt(id));

    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }

    return res.status(200).json({ product });
}