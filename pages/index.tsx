import React, { ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchInput } from '../state/shopSlice';
import ShopLayout from '../components/ShopLayout/ShopLayout';
import ProductsList from '../components/ProductsList/ProductsList';
import { useRouter } from 'next/router';
import { setPage } from '../state/shopSlice';

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const s =
      typeof window !== 'undefined'
        ? window.localStorage.getItem('searchInput') || ''
        : '';
    dispatch(setSearchInput(s));
    const page = router.query.page || 1;
    dispatch(setPage(Number(page) || 1));
  });
  return (
    <>
      <ProductsList />
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <ShopLayout>{page}</ShopLayout>;
};
