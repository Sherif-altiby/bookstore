import "./Nav.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useItemContext } from "../context/GlobalContext";
const Nav = () => {
  const context = useItemContext();
  const [block, setBlock] = useState(true);
  const handleBlock = () => {
    setBlock(!block);
  };
  const handleBookName = (e) => {
    context.setBookName(e.target.value);
  };
  return (
    <div className="nav container ">
      <div className="logo">
        <Link to="/">
          <i className="fa-solid fa-book"></i>
          <span> Bookly </span>
        </Link>
      </div>
      <div className={block === true ? "search" : "search block"}>
        <input
          type="search"
          placeholder="Search here..."
          onChange={(e) => handleBookName(e)}
        />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="icons">
        <i
          className="fa-solid fa-magnifying-glass hide "
          onClick={handleBlock}
        ></i>
        <Link to="/fav">
          <i className="fa-solid fa-heart"></i>
        </Link>
        <Link to="/cart">
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>
        <Link to="/create-acount" > <i className="fa-solid fa-user"></i> </Link>
      </div>
    </div>
  );
};

export default Nav;
