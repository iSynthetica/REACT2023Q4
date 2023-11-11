import { useSearchContext } from '../../context/searchContext';
import ProductI from '../../types/ProductI';

interface Props {
  products: ProductI[];
  total: number;
  totalPages: number;
  isError: boolean;
}

const ResultTitle = ({ products, total, totalPages, isError }: Props) => {
  const { s } = useSearchContext();
  return (
    <>
      <h3 id="resultTitle">
        {!products.length ? (
          'Nothing found, try another request.'
        ) : s ? (
          <div
            dangerouslySetInnerHTML={{
              __html: `Search result for ${s} found ${total} products in
                  products titles and descriptions. Total pages ${totalPages}.`,
            }}
          />
        ) : isError ? (
          `Something went wrong try again.`
        ) : (
          <div
            dangerouslySetInnerHTML={{
              __html: `Total products ${total}. Total pages ${totalPages}. Type into search field for filtering products by title or
                  description.`,
            }}
          />
        )}
      </h3>
    </>
  );
};

export default ResultTitle;
