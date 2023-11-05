import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  return (
    <>
      <h4>Product details ({id})</h4>
    </>
  );
};

export default ProductDetails;
