import Main from "../components/Main";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductDetails from "../components/Product";
import styles from "../styles/Home.module.css";

const data = {
  id: 1,
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, sint voluptates reiciendis dolorum ipsam autem iure deleniti, consequuntur vel alias culpa iusto placeat omnis dolores totam nisi nulla, provident velit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut pariatur illo eveniet vitae voluptate vel doloremque ullam quos accusamus cum? Veniam labore esse excepturi earum laboriosam quo ad atque consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum minima, sit magnam aliquid velit rerum illo autem ad dolorum itaque eveniet laboriosam nam ab perspiciatis deleniti aut quas nisi minus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptate nisi ipsum, quia perspiciatis earum aut tenetur sed magni tempora quam, temporibus accusantium modi ipsa porro, incidunt exercitationem rem asperiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa soluta ad esse at magnam doloribus a doloremque eaque debitis cum voluptatibus, ullam enim alias est nam blanditiis suscipit totam? Voluptate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore repellendus quod harum laudantium culpa commodi distinctio! Possimus provident culpa sapiente, et quas error sint incidunt alias perspiciatis iure. Repudiandae, veniam.",
  image:
    "https://i.picsum.photos/id/100/2500/1656.jpg?hmac=gWyN-7ZB32rkAjMhKXQgdHOIBRHyTSgzuOK6U0vXb1w",
  imageAlt: "beach",
  rating: 3.5,
  title: "some title",
};

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <Main>
        <ProductDetails data={data} />
      </Main>
      <Footer />
    </div>
  );
};

export default Home;
