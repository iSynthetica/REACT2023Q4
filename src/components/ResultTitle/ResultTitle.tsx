import { useAppContext } from '../../context/AppProvider';
import ProductI from '../../types/ProductI';

interface Props {
  products: ProductI[];
  isError: boolean;
}

const ResultTitle = ({ products, isError }: Props) => {
  const { s, total, totalPages } = useAppContext();
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

export default ResultTitle;
