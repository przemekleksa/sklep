import { useQuery } from "react-query";
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

const getProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data: StoreApiResponse[] = await res.json();
  return data;
};

const ProductListItemCSRPage = () => {
  const { isLoading, data, error } = useQuery("products", getProducts);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!data || error) {
    return <div>Something went wrong</div>;
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      {data.map((product) => {
        return (
          <li key={product.id} className="shadow border-2 p-4">
            <ProductListItem
              data={{
                image: product.image,
                imageAlt: product.title,
                title: product.title,
              }}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ProductListItemCSRPage;
