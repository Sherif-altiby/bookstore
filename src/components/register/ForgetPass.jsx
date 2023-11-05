import "./Register.scss";
import { Link } from "react-router-dom";

const Forget = () => {
  return (
    <div className="create_acount">
      <form>
        <h2>FORGET PASSWORD</h2>
        <input
          type="text"
          placeholder="Your Email Or Phone"
          autoComplete="off"
          required
        />

        <div className="btn"> Send Message </div>
        <p>
          Create An Acount? <Link to="/create-acount"> Sign Up </Link>
        </p>
      
      </form>
    </div>
  );
};

export default Forget;
