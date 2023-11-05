import ProductI from '../types/ProductI';

const ProductItem = ({
  name,
  description,
  images,
  short_description,
}: ProductI) => {
  return (
    <>
      <article>
        <div className="imgContainer">
          <img src={images[0].src} alt={name} />
        </div>
        <div className="descriptionContainer">
          <h3>{name}</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: short_description || description,
            }}
          />
        </div>
      </article>
    </>
  );
};

export default ProductItem;
