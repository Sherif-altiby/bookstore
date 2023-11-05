import "./Home.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import m7 from "../../assets/img/stand.png";
import { data } from "../data/SwiperData";
import { useEffect, useRef, useState } from "react";
import * as actions from "../context/ActionTypes";
import { useItemContext } from "../context/GlobalContext";

const Home = () => {
  const context = useItemContext();
  const [meassage, setMeassage] = useState(false);
  const swiperRef = useRef(null);

  const addToCart = (item) => {
    setMeassage(true);
    setTimeout(() => {
      setMeassage(false);
    }, 2000);
    context.stateDispatch({ type: actions.ADD_ITEM_TO_CART, payload: item });
  };

  useEffect(() => {
    const slide = swiperRef.current.swiper;
    const handleSlide = () => {
      if (slide.isEnd) {
        slide.slideTo(0);
      } else {
        slide.slideNext();
      }
    };
    const interval = setInterval(handleSlide, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="home container " id="home">
      <p className={meassage === true ? "success block" : "success"}>
        {context.sucess} <span onClick={() => setMeassage(false)}> X </span>
      </p>
      <div className="text">
        <h1>Upto 75% off</h1>
        <p>
          Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Magnam
          Deserunt Nostrum Accusamus. Nam Alias Sit Necessitatibus, Aliquid Ex
          Minima At!
        </p>
        <div className="btn"> Shop Now </div>
      </div>
      <div className="book_shell">
        <Swiper ref={swiperRef} loop={true} slidesPerView={3} spaceBetween={10}>
          {data.map((item) => (
            <SwiperSlide
              key={item.id}
              className="swbr"
              onClick={() => addToCart(item)}
            >
              <img src={item.img} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="stand">
          <img src={m7} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
