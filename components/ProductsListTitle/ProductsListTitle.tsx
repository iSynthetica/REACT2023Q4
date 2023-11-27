import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';

interface Props {
  isError: boolean;
}

const ProductsListTitle = ({ isError }: Props) => {
  const { s, total, totalPages, products } = useSelector(
    (state: RootState) => state.shop
  );
  return (
    <>
      <h3 id="resultTitle">
        {!products.length ? (
          'Nothing found, try another request.'
        ) : s ? (
          <div
            dangerouslySetInnerHTML={{
              __html: `Search result for <strong>${s}</strong> found <strong>${total}</strong> products in
                  products titles and descriptions. Total pages <strong>${totalPages}</strong>.`,
            }}
          />
        ) : isError ? (
          `Something went wrong try again.`
        ) : (
          <div
            dangerouslySetInnerHTML={{
              __html: `Total products <strong>${total}</strong>. Total pages <strong>${totalPages}</strong>. Type into search field for filtering products by title or
                  description.`,
            }}
          />
        )}
      </h3>
    </>
  );
};

export default ProductsListTitle;
