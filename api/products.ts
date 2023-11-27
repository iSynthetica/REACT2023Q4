import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import ProductI from '../types/ProductI';

interface FetchProductsArgs {
  page?: number;
  per_page?: number;
  s?: string;
}
interface FetchProductsParams {
  page?: number;
  per_page?: number;
  search?: string;
}

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shop.synthetica.com.ua//wp-json/wc/v3',
    prepareHeaders(headers) {
      const token =
        'Y2tfOTNmOTkyZTA5ZjE1MTM5NzFiZjIwYWUwZDkyZWEyNzdmNWVmYTMzMjpjc18wYWE0ZGUxMzNlYzYxOGM1NWU3MjZiM2MxNWY4ODdkOTNiOWU3YTQy';
      headers.set('authorization', `Basic ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    fetchProduct: builder.query<ProductI, number>({
      query: (id) => ({
        url: `/products/${id}`,
      }),
    }),
    fetchProducts: builder.query<
      {
        products: ProductI[];
        total: number;
        totalPages: number;
      },
      FetchProductsArgs
    >({
      query: ({ page = 1, per_page = 25, s = '' }) => {
        const params: FetchProductsParams = { page, per_page };
        if (s.trim()) {
          params.search = s;
        }
        return {
          url: `/products`,
          params,
        };
      },
      transformResponse(products: ProductI[], meta) {
        let totalPages = 1;
        if (meta && meta.response && meta.response.headers) {
          totalPages = Number(
            meta.response.headers.get('x-wp-totalpages') || '1'
          );
        }
        let total = 0;
        if (meta && meta.response && meta.response.headers) {
          total = Number(meta.response.headers.get('x-wp-total') || '0');
        }
        return {
          products,
          total,
          totalPages,
        };
      },
    }),
  }),
});

export const { useFetchProductQuery, useFetchProductsQuery } = productsApi;
export const { fetchProduct, fetchProducts } = productsApi.endpoints;
