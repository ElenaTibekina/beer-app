import React from 'react';
import axios from 'axios';
import {ProductList} from '@/components/ProductsList';
import { useRouter } from 'next/router';

const ProductListPage = ({ products }) => {
    const router = useRouter();

    const handleClick = async (sku) => {
        try {
            const response = await axios.get(`/api/stock-price/${sku}`);
            const { product } = response.data;
            const { id, brand } = product;
            router.push(`/${id}-${brand}`);
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    };

    return (
        <div>
            <h1>Product List</h1>
            <ProductList products={products} onClick={handleClick} />
        </div>
    );
};

export default ProductListPage;

