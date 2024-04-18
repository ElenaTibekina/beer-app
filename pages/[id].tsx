import { useRouter } from 'next/router';
import {useProduct} from '../app/hooks/useProduct';

const ProductPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const { product, loading, error } = useProduct(id);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!product) {
        return <p>No product found</p>;
    }

    return (
        <div key={product.id}>
            <h1>{product.brand}</h1>
            <img src={product.image} alt={product.brand} />
            <p>Style: {product.style}</p>
            <p>Substyle: {product.substyle}</p>
            <p>ABV: {product.abv}</p>
            <p>Origin: {product.origin}</p>
            <p>Information: {product.information}</p>
            <p>Price: {product.price}</p>
        </div>
    );
};

export default ProductPage;
