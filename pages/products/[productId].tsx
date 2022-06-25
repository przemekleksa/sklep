import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import { ProductDetails } from "../../components/Product";

export interface StoreApiResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

type InferGetStaticPaths<T> = T extends () => Promise<{
  paths: Array<{ params: infer R }>;
}>
  ? { params?: R }
  : never;

export const getStaticProps = async ({
  params,
}: InferGetStaticPaths<typeof getStaticPaths>) => {
  if (!params?.productId) {
    return {
      props: {},
      notFound: true,
    };
  }

  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products/${params?.productId}`
  );

  const data: StoreApiResponse | null = await res.json();
  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("https://naszsklep-api.vercel.app/api/products");
  const data: StoreApiResponse[] = await res.json();

  return {
    paths: data.map((product) => {
      return {
        params: {
          productId: product.id.toString(),
        },
      };
    }),
    fallback: false,
  };
};

const ProductIdPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!data) {
    return <div>Something went wrong....</div>;
  }

  return (
    <div>
      <Link href="/products">
        <a>Go back to main site</a>
      </Link>
      <ProductDetails
        data={{
          id: data.id,
          title: data.title,
          image: data.image,
          imageAlt: data.title,
          description: data.description,
          rating: data.rating.rate,
        }}
      />
    </div>
  );
};

export default ProductIdPage;
