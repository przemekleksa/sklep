import Rating from "./Rating";

interface ProductDetailsProps {
  description: string;
  image: string;
  imageAlt: string;
  rating: number;
  title: string;
}

export const ProductDetails = ({
  image,
  imageAlt,
  description,
  rating,
  title,
}: ProductDetailsProps) => {
  return (
    <>
      <img src={image} alt={imageAlt} />
      <h2 className="p-4 font-bold text-center">{title}</h2>
      <p>{description}</p>
      <Rating rating={rating} />
    </>
  );
};

type ProductListItem = Pick<
  ProductDetailsProps,
  "title" | "image" | "imageAlt"
>;

interface ProductListItemProps {
  data: ProductListItem;
}

const ProductListItem = ({
  data: { image, imageAlt, title },
}: ProductListItemProps) => {
  return (
    <>
      <img src={image} alt={imageAlt} />
      <h2 className="p-4 font-bold text-center">{title}</h2>
    </>
  );
};

export default ProductListItem;
