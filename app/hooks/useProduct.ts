import { useState, useMemo } from 'react';
import { fetchProduct } from '../../pages/utils/fetchProduct';

export const useProduct = (id) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useMemo(() => {
        const fetchData = async () => {
            if (!id) return;
            setLoading(true);
            setError(null);

            try {
                const productData = await fetchProduct(id);
                setProduct(productData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    return { product, loading, error };
};
