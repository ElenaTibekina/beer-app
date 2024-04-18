import React, {useState, useEffect, useMemo, useCallback} from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const ListItem = ({ item }) => {
    const [product, setProduct] = useState(null);

    const fetchProductPrice = useCallback(async () => {
        try {
            const res = await fetch(`/api/stock-price/${item?.skus[0]?.code}`);
            if (res.ok) {
                const data = await res.json();
                setProduct(data.product);
            } else {
                console.error('Failed to fetch price:', res.status);
            }
        } catch (error) {
            console.error('Error fetching price:', error.message);
        }
    }, [item]);

    useEffect(() => {
        fetchProductPrice();
    }, []);

    const individualProductRout = useMemo(() => `/${item.id}-${item.brand.toLowerCase().replaceAll(' ', '-')}`, [item]);

    return (
        <Link href={individualProductRout}>
            <div style={{ color: 'black', backgroundColor: '#fff', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', width: "100%", height: '300px', borderRadius: '30px 10px 10px 10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <p style={{alignSelf: 'center'}}>{item.brand}</p>
                <div style={{
                    alignSelf: 'center',
                    width: 150,
                    height: 150,
                    position: "relative",
                }}>
                    <Image src={item.image} alt={item.brand} fill
                           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                           priority={true}
                           style={{objectFit:"contain"}} />
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    {product && <p style={{fontSize: '12px', alignSelf: 'center'}}>{product.price}</p>}
                    <button style={{backgroundColor: 'orange', color: '#fff', width: '40px', height: '40px', border: 'none', borderRadius: '10px 0px 10px 0px', fontSize: '26px', cursor: 'pointer'}}>+</button>
                </div>
            </div>
        </Link>
    );
};
