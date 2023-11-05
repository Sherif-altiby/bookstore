import "./FavBook.scss";
import { useItemContext } from "../context/GlobalContext";
import * as actions from "../context/ActionTypes";
const FavBook = () => {
  const context = useItemContext();
  return (
    <div className="favbook container">
      <h3>
        {context.heart.length >= 1
          ? "Your Favourite Books"
          : "NO FAVOURITE BOOKS"}
      </h3>
      <div className="favbook_heart">
        {context.heart.map((item) => (
          <div className="item_fav" key={item.id}>
            <img src={item.img} alt="" />
            <div className="btn_container">
              <div
                className="btn"
                onClick={() =>
                  context.stateDispatch({
                    type: actions.UN_HEART_ITEM,
                    payload: item,
                  })
                }
              >
                X
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
          </div>
        ))}
      </div>
      <h3>
        {context.read.length >= 1 ? "Your Readed Books" : "NO BOOTS READED"}
      </h3>
      <div className="favbook_heart">
        {context.read.map((item) => (
          <div className="item_fav" key={item.id}>
            <img src={item.img} alt="" />
            <div className="btn_container">
              <div
                className="btn"
                onClick={() =>
                  context.stateDispatch({
                    type: actions.UN_READ_BOOK,
                    payload: item,
                  })
                }
              >
                X
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavBook;
