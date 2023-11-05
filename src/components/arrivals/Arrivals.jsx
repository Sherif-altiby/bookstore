import './Arrivals.scss'
import 'swiper/css';
import SectionTitile from '../sectionTitle/SectionTitile'
import { Swiper, SwiperSlide } from 'swiper/react';
import { data } from '../data/ArrivalData';
import { data2 } from '../data/ArrivalData';
import { useEffect, useState, useRef } from 'react';


const Arrivals = () => {
  
  const [preview, sestPreview] = useState(3)
  const swiperRef = useRef(null)
  const swiperRefTwo = useRef(null)
  useEffect(()=>{
    const handleResize = ()=>{
      if(window.innerWidth > 1115){sestPreview(3)}
        else if (window.innerWidth <= 1115 && window.innerWidth > 425){sestPreview(2)}
             else {sestPreview(1)}}
      handleResize()
      window.addEventListener("resize", handleResize)
      return () => {window.removeEventListener("resize", handleResize)};
  }, [])

  useEffect(()=>{
    const swiper = swiperRef.current.swiper
    const scrollNext = ()=>{
      if(swiper.isEnd){swiper.slideTo(0)}
         else {swiper.slideNext()}}
      const interval =   setInterval(scrollNext, 3000)
         return ()=>{ clearInterval(interval)}
  }, [])

  useEffect(() => {
    const swiper = swiperRefTwo.current.swiper;
    const scrollNextSlide = () => {
      if (swiper.isEnd) { swiper.slideTo(0)}
        else { swiper.slideNext() }}
    const interval = setInterval(scrollNextSlide, 4000);
    return () => { clearInterval(interval)}
  }, []);

  return (
    <div className='arrivals container' id='arrivals' >
      <SectionTitile title="New Arrivals  " />
      <div className="arrivals_content  ">
      <Swiper className='swiper_padding'
          ref={swiperRef}
          loop={true}
          slidesPerView={preview}
          spaceBetween={30}
          autoplay={{ delay: 3000 }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id} className="feature_item">
              <div className="img_icon">
                <img src={item.img} alt="" />
              </div>
              <div className="text">
                <h2> {item.name} </h2>
                <div className="price">
                  <p> ${item.price} <span>$23.4</span>  </p>
                </div>
                <div className="icons">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-stroke"></i>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      <Swiper className='swiper_padding'
          ref={swiperRefTwo}
          loop={true}
          slidesPerView={preview}
          spaceBetween={30}
          autoplay={{ delay: 3000 }}
        >
          {data2.map((item) => (
            <SwiperSlide key={item.id} className="feature_item">
              <div className="img_icon">
                <img src={item.img} alt="" />
              </div>
              <div className="text">
                <h2> {item.name} </h2>
                <div className="price">
                  <p> ${item.price} <span>$23.4</span>  </p>
                </div>
                <div className="icons">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-stroke"></i>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

     


      </div>
    </div>
  )
}

export default Arrivals