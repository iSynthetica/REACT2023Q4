interface ProductI {
  id: number;
  name: string;
  description: string;
  short_description: string;
  images: ImageI[];
  categories: {
    name: string;
  }[];
  price_html: string;
  sku: string;
  slug: string;
}

interface ImageI {
  src: string;
}

export default ProductI;
