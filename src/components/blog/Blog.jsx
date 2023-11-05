import "./Blog.scss";
import "swiper/css";
import "swiper/css/navigation";
import SectionTitile from "../sectionTitle/SectionTitile";
import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "../data/BlogData";
import { useEffect, useRef, useState } from "react";

const Review = () => {
  const [slide, setSlide] = useState(3)
  const swiperRef = useRef(null)

  useEffect(()=>{
    const handleSlide = ()=>{
      if(window.innerWidth > 992){setSlide(3)}
        else if(window.innerWidth <= 992 && window.innerWidth > 425) {setSlide(2)}
            else {setSlide(1)}}
      handleSlide()      
      window.addEventListener("resize", handleSlide)
      return ()=> window.removeEventListener("resize", handleSlide)
  }, [])

  useEffect(()=>{
    const slide = swiperRef.current.swiper;
    const handleSlid = ()=>{
      if(slide.isEnd){slide.slideTo(0)}
          else {slide.slideNext()}}
    const interval = setInterval(handleSlid, 5000)      
    return ()=> {clearInterval(interval)}
  }, [])

  return (
    <div className="blog container" id="blog" >
      <SectionTitile title="Clients Reviews" />
      <div className="review_content">
        <Swiper
        className="swp"
          ref={swiperRef}
          loop={true}
          slidesPerView={slide}
          spaceBetween={30}
          autoplay={{ delay: 3000 }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="item">
                <div className="img">
                <img src={item.img} alt="" />
                </div>
                <h3> {item.name} </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, natus fuga. Adipisci itaque quidem nihil tempore ex as
              
                </p>
                <div className="btn"> Read More </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
