import { InferGetStaticPropsType } from "next";
import Pagination from "../components/Pagination";
import ProductListItem from "../components/Product";

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

export const getStaticProps = async () => {
  const res = await fetch("https://naszsklep-api.vercel.app/api/products");
  const data: StoreApiResponse[] = await res.json();
  return {
    props: {
      data,
    },
  };
};

const ProductPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {data.map((product) => {
          return (
            <li key={product.id} className="shadow border-2">
              <ProductListItem
                data={{
                  id: product.id,
                  image: product.image,
                  imageAlt: product.title,
                  title: product.title,
                }}
              />
            </li>
          );
        })}
      </ul>
      <Pagination />
    </>
  );
};

export default ProductPage;
