import Link from "next/link";
import Rating from "./Rating";
import Image from "next/image";

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
      <div className="bg-white p-4">
        <Link href={`/products/${data.id}`}>
          <a>
            <Image
              src={data.image}
              alt={data.imageAlt}
              layout="responsive"
              width={16}
              height={9}
              objectFit="contain"
            />

            <h2 className="p-4 font-bold text-center text-3xl">{data.title}</h2>
          </a>
        </Link>
      </div>
    </>
  );
};

export const ProductDetails = ({
  data: { image, imageAlt, description, rating, title },
}: ProductDetailsProps) => {
  return (
    <>
      <div className="bg-white p-4">
        <Image
          src={image}
          alt={imageAlt}
          layout="responsive"
          width={16}
          height={9}
          objectFit="contain"
        />

        <h2 className="p-4 font-bold text-center">{title}</h2>
        <p>{description}</p>
        <Rating rating={rating} />
      </div>
    </>
  );
};

export default ProductListItem;
