"use client"
import React, {useState, useMemo, useCallback} from 'react';
import {ListItem} from './ListItem'


export const ProductsList = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const res = await fetch('/api/products');
            if (res.ok) {
                const data = await res.json();
                setProducts(data.products);
            } else {
                console.error('Failed to fetch products:', res.status);
            }
        } catch (error) {
            console.error('Error fetching products:', error.message);
        }
    };

    useCallback(() => fetchProducts(), [])

    useMemo(() => {
        fetchProducts();
    }, []);


    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '20px' }}>
            {products.map(product => (
                <div style={{
                    flex: '1 1 auto',
                    maxWidth: 'calc(50% - 20px)',
                    minWidth: 'calc(25% - 20px)'
                }} key={product.id}>
                    <ListItem item={product} />
                </div>
            ))}
        </div>
    );
};

export default ProductsList;
