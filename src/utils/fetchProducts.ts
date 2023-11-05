import ProductI from '../types/ProductI';

const host = 'https://shop.synthetica.com.ua//wp-json/wc/v3';
const token =
  'Y2tfOTNmOTkyZTA5ZjE1MTM5NzFiZjIwYWUwZDkyZWEyNzdmNWVmYTMzMjpjc18wYWE0ZGUxMzNlYzYxOGM1NWU3MjZiM2MxNWY4ODdkOTNiOWU3YTQy';

export const fetchProduct = async (
  id: number
): Promise<{ product: ProductI | null; error: boolean }> => {
  const url = `${host}/products/${id}`;
  const headers = new Headers();
  headers.append('Authorization', `Basic ${token}`);
  const options = {
    method: 'GET',
    headers,
  };

  try {
    const response = await fetch(url, options);

    const product: ProductI = await response.json();

    return {
      product,
      error: false,
    };
  } catch (err) {
    return { product: null, error: true };
  }
};

const fetchProducts = async (
  page = 1,
  perPage = 10,
  s = ''
): Promise<{
  products: ProductI[];
  error: boolean;
  total: number;
  totalPages: number;
}> => {
  const sParam = s ? `&search=${s}` : '';
  const url = `${host}/products?per_page=${perPage}&page=${page}${sParam}`;
  const headers = new Headers();
  headers.append('Authorization', `Basic ${token}`);
  const options = {
    method: 'GET',
    headers,
  };

  try {
    const response = await fetch(url, options);

    const products: ProductI[] = await response.json();
    const total = response.headers.get('x-wp-total');
    const totalPages = response.headers.get('x-wp-totalpages');

    return {
      products,
      error: false,
      total: Number(total),
      totalPages: Number(totalPages),
    };
  } catch (err) {
    return { products: [], error: true, total: 0, totalPages: 0 };
  }
};

export default fetchProducts;
