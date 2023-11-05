import './Footer.scss'

const Footer = () => {
  return (
     
    <footer className='container' >
        <div className="footer_ul">
    <ul>
      <li> <h2> Our Location </h2> </li>
      <li> <i className="fa-solid fa-location-dot"></i> <span> India  </span> </li>
      <li> <i className="fa-solid fa-location-dot"></i> <span> USA    </span> </li>
      <li> <i className="fa-solid fa-location-dot"></i> <span> Russia </span> </li>
      <li> <i className="fa-solid fa-location-dot"></i> <span> France </span> </li>
      <li> <i className="fa-solid fa-location-dot"></i> <span> Japan  </span> </li>
      <li> <i className="fa-solid fa-location-dot"></i> <span> Spain  </span> </li>
    </ul>
    <ul>
      <li> <h2>Quick Links</h2> </li>
      <li> <i className="fa-solid fa-arrow-right"></i> <span> Home     </span> </li>
      <li> <i className="fa-solid fa-arrow-right"></i> <span> Featured </span> </li>
      <li> <i className="fa-solid fa-arrow-right"></i> <span> Arrivals </span> </li>
      <li> <i className="fa-solid fa-arrow-right"></i> <span> Reviews  </span> </li>
      <li> <i className="fa-solid fa-arrow-right"></i> <span> Blogs    </span> </li>
    </ul>
    <ul>
      <li> <h2>Extra Links</h2> </li>
      <li> <i className="fa-solid fa-arrow-right"></i> <span> Account  Info  </span> </li>
      <li> <i className="fa-solid fa-arrow-right"></i> <span> Ordered Items  </span> </li>
      <li> <i className="fa-solid fa-arrow-right"></i> <span> Privacy Policy </span> </li>
      <li> <i className="fa-solid fa-arrow-right"></i> <span> Payment Method </span> </li>
      <li> <i className="fa-solid fa-arrow-right"></i> <span> Our Services   </span> </li>
    </ul>
    <ul>
      <li> <h2>Contact Info</h2> </li>
      <li> <i className="fa-solid fa-phone"></i>     <span> +20-1017-143-343 </span> </li>
      <li> <i className="fa-solid fa-phone"></i>     <span> +20-1017-143-343 </span> </li>
      <li> <i className="fa-solid fa-envelope"></i>  <span> +20-1017-143-343 </span> </li>
    </ul>
        </div>
        <div className="icons">
          <div className="icon"> <i className="fa-brands fa-facebook"></i>   </div>
          <div className="icon"> <i className="fa-brands fa-x-twitter"></i>  </div>
          <div className="icon"> <i className="fa-brands fa-instagram"></i>  </div>
          <div className="icon"> <i className="fa-brands fa-linkedin"></i>   </div>
          <div className="icon"> <i className="fa-brands fa-pinterest"></i>  </div>
        </div>
        <div className="copy_write">
          Creayed by <span> sherif altiby</span> | allrights reseved!
        </div>
    </footer>

  )
}

export default Footer