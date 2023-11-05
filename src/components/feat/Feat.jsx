import "./Feat.scss";
const Feat = () => {
  return (
    <div className="feat container">
      <div className="box">
        <i className="fa-solid fa-car-side"></i>
        <div className="text">
          <h3> Free Shipping </h3>
          <p>order over $100</p>
        </div>
      </div>

      <div className="box">
        <i className="fa-solid fa-lock"></i>
        <div className="text">
          <h3> Seacure Payment </h3>
          <p>100 Secure Payment</p>
        </div>
      </div>

      <div className="box">
        <i className="fa-solid fa-rotate-left"></i>
        <div className="text">
          <h3> Easy Returns </h3>
          <p>100 Deturns</p>
        </div>
      </div>

      <div className="box">
        <i className="fa-solid fa-headset"></i>
        <div className="text">
          <h3> 24/7 Support </h3>
          <p>Call Us Anytime</p>
        </div>
      </div>
    </div>
  );
};

export default Feat;
