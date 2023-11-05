import "./Deal.scss";
import img from "../../assets/img/deal-img.jpg"
const Deal = () => {
  return (
    <div className="deal container">
      <div className="text">
        <h2>deal of the day</h2>
        <h1>Upto 50% off</h1>
        <p>
          Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Unde
          Perspiciatis In Atque Dolore Tempora Quaerat At Fuga Dolorum Natus
          Velit.
        </p>
        <div className="btn"> Shop Now </div>
      </div>
      <img src={img} alt="" />
    </div>
  );
};

export default Deal;
