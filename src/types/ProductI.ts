interface ProductI {
  id: number;
  name: string;
  description: string;
  images: ImageI[];
}

interface ImageI {
  src: string;
}

export default ProductI;
