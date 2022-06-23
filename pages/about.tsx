import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

interface Props {}

const AboutPage = ({}: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main>
        <div className="mx-auto max-w-md w-full flex-grow">About us</div>
      </Main>

      <Footer />
    </div>
  );
};

export default AboutPage;
