import { useRouter } from "next/router";
import { useEffect } from "react";
import { useQuery } from "react-query";
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

const getProducts = async (offset: string | string[]) => {
  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products?take=25&offset=${offset}`
  );
  const data: StoreApiResponse[] = await res.json();
  return data;
};

const ProductListItemCSRPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;

    // codes using router.query
  }, [router.isReady]);

  const { isLoading, data, error } = useQuery("products", () =>
    getProducts(router.query.offset!)
  );

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!data || error) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {data.map((product) => {
          return (
            <li key={product.id} className="shadow border-2 p-4">
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

export default ProductListItemCSRPage;
