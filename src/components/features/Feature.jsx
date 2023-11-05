import "./Feature.scss";
import "swiper/css";
import "swiper/css/navigation";
import SectionTitile from "../sectionTitle/SectionTitile";
import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "../data/FeatData";
import { useEffect, useState, useRef } from "react";
import { useItemContext } from "../context/GlobalContext";
import * as actions from "../context/ActionTypes";
const Feature = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);
  const swiperRef = useRef(null);
  const context = useItemContext();

  const heartHandle = (item) => {
    item.liked = !item.liked;
    context.stateDispatch({ type: actions.HEART_ITEM, payload: item });
  };

  const handleRead = (item) => {
    item.read = !item.read;
    context.stateDispatch({ type: actions.READ_BOOK, payload: item });
  };

  for (let i = 0; i < context.heart.length; i++) {
    for (let x = 0; x < data.length; x++) {
      if (context.heart[i].id === data[x].id) {
        data[x] = context.heart[i];
      }
    }
  }

  for (let i = 0; i < context.read.length; i++) {
    for (let x = 0; x < data.length; x++) {
      if (context.read[i].id === data[x].id) {
        data[x] = context.read[i];
      }
    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setSlidesPerView(4);
      } else if (window.innerWidth <= 768 && window.innerWidth > 500) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const swiper = swiperRef.current.swiper;
    const scrollNextSlide = () => {
      if (swiper.isEnd) {
        swiper.slideTo(0);
      } else {
        swiper.slideNext();
      }
    };
    const interval = setInterval(scrollNextSlide, 19000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="feature container" id="feature">
      <SectionTitile title={"Featured Books"} />
      <div className="feature_content">
        <Swiper
          ref={swiperRef}
          loop={true}
          slidesPerView={slidesPerView}
          spaceBetween={10}
          autoplay={{ delay: 3000 }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id} className="feature_item">
              <div className="img_icon">
                <div className="icons">
                  <i
                    className={
                      item.read === true
                        ? "fa-solid fa-eye red"
                        : "fa-solid fa-eye"
                    }
                    onClick={() => handleRead(item)}
                  ></i>
                  <i
                    className={
                      item.liked === true
                        ? "fa-solid fa-heart red"
                        : "fa-solid fa-heart"
                    }
                    onClick={() => heartHandle(item)}
                  ></i>
                </div>
                <img src={item.img} alt="" />
              </div>
              <div className="text">
                <h2> {item.name} </h2>
                <div className="price">
                  <p>
                    ${item.price} <span>$23.4</span>
                  </p>
                </div>
                <div
                  className="btn"
                  onClick={() =>
                    context.stateDispatch({
                      type: actions.ADD_ITEM_TO_CART,
                      payload: item,
                    })
                  }
                >
                  Add To Cart
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Feature;
