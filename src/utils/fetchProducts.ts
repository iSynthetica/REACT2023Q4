import ProductI from '../types/ProductI';

const host = 'https://shop.synthetica.com.ua//wp-json/wc/v3';
const token =
  'Y2tfOTNmOTkyZTA5ZjE1MTM5NzFiZjIwYWUwZDkyZWEyNzdmNWVmYTMzMjpjc18wYWE0ZGUxMzNlYzYxOGM1NWU3MjZiM2MxNWY4ODdkOTNiOWU3YTQy';

const fetchProducts = async (
  s = ''
): Promise<{ products: ProductI[]; error: boolean }> => {
  const sParam = s ? `&search=${s}` : '';
  const url = `${host}/products?per_page=25${sParam}`;
  const headers = new Headers();
  headers.append('Authorization', `Basic ${token}`);
  const options = {
    method: 'GET',
    headers,
  };

  try {
    const response = await fetch(url, options);
    const products: ProductI[] = await response.json();

    return { products, error: false };
  } catch (err) {
    return { products: [], error: true };
  }
};

export default fetchProducts;
