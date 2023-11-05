import Arrivals from "../arrivals/Arrivals";
import Contact from "../contact/Contact";
import Deal from "../deal/Deal";
import Feat from "../feat/Feat";
import Feature from "../features/Feature";
import Footer from "../footer/Footer";
import Home from "../home/Home";
import BottomNav from "../navbar/BottomNav";
import Review from "../review/Review";
import Blog from "../blog/Blog";
import Menu from "../navbar/Menu";

const HomePage = () => {
  return (
     <>
      <Menu />
      <Home />
      <Feat />
      <Feature />
      <Contact />
      <Arrivals />
      <Deal />
      <Review />
      <Blog />
      <Footer />
      <BottomNav />
    </>
  );
};

export default HomePage;
