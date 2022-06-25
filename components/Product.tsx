import Link from "next/link";
import Rating from "./Rating";

interface ProductDetails {
  id: number;
  description: string;
  image: string;
  imageAlt: string;
  rating: number;
  title: string;
}

type ProductListItem = Pick<
  ProductDetails,
  "id" | "title" | "image" | "imageAlt"
>;

interface ProductListItemProps {
  data: ProductListItem;
}

interface ProductDetailsProps {
  data: ProductDetails;
}

const ProductListItem = ({ data }: ProductListItemProps) => {
  return (
    <>
      <Link href={`/products/${data.id}`}>
        <a>
          <img src={data.image} alt={data.imageAlt} />

          <h2 className="p-4 font-bold text-center">{data.title}</h2>
        </a>
      </Link>
    </>
  );
};

export const ProductDetails = ({
  data: { image, imageAlt, description, rating, title },
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

export default ProductListItem;
