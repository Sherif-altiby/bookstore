import "./Register.scss";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="create_acount">
      <form>
        <h2> SIGN IN </h2>
        <input
          type="text"
          placeholder="User Name"
          autoComplete="off"
          required
        />
        <input type="password" placeholder="Password" required />

        <div className="btn">Sign In</div>
        <p>
          Create An Acount? <Link to="/create-acount"> Sign Up </Link>
        </p>
        <p>
          Forget Password? <Link to="/forget"> Clike Here </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
