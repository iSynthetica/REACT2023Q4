import styles from './ProductItem.module.css';
import Link from 'next/link';
import ProductI from '../../types/ProductI';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import Image from 'next/image';

const ProductItem = ({
  id,
  name,
  description,
  images,
  short_description,
}: ProductI) => {
  const { page } = useSelector((state: RootState) => state.shop);
  const getDetailsLink = () => {
    if (!page || page === 1) {
      return `/product/${id}`;
    }

    return `/page/${page}/product/${id}`;
  };
  return (
    <>
      <article>
        <div className={styles.imgContainer}>
          <Image
            src={images[0].src}
            alt={name}
            width={260}
            height={260}
            priority={true}
          />
        </div>
        <div className="descriptionContainer">
          <h3 className={styles.itemTitle}>{name}</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: short_description || description,
            }}
          />
          <Link className={styles.button} href={getDetailsLink()}>
            Product details
          </Link>
        </div>
      </article>
    </>
  );
};

export default ProductItem;
