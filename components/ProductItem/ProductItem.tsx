import styles from './ProductItem.module.css';
import Link from 'next/link';
import ProductI from '../../types/ProductI';

const ProductItem = ({
  id,
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
          <h3 className={styles.itemTitle}>{name}</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: short_description || description,
            }}
          />
          <Link className={styles.button} href={`/product/${id}`}>
            Product details
          </Link>
        </div>
      </article>
    </>
  );
};

export default ProductItem;
