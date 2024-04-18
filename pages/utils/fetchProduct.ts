export const fetchProduct = async (productId) => {
    const productsRes = await fetch('/api/products');
    if (!productsRes.ok) {
        throw new Error(`Failed to fetch products: ${productsRes.status}`);
    }
    const productsData = await productsRes.json();
    const foundProduct = productsData.products.find(p => p.id === parseInt(productId.split('-')[0]));
    if (!foundProduct) {
        throw new Error(`Product with ID ${productId} not found`);
    }
    const skuCode = foundProduct.skus?.[0]?.code;
    if (!skuCode) {
        throw new Error(`SKU code not found for product with ID ${productId}`);
    }
    const priceRes = await fetch(`/api/stock-price/${skuCode}`);
    if (!priceRes.ok) {
        throw new Error(`Failed to fetch price: ${priceRes.status}`);
    }
    const priceData = await priceRes.json();
    return { ...foundProduct, price: priceData?.product?.price };
};