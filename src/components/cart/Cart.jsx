import "./Cart.scss";
import { useItemContext } from "../context/GlobalContext";
import * as actions from "../context/ActionTypes";

const Cart = () => {
  const context = useItemContext();
  const totalCount = context.cart.reduce(
    (total, item) => total + item.count.toFixed(2) * item.price,
    0
  );
  const totalPriceApi = context.cartApi.reduce((total, book) => {
    if (book.saleInfo && book.saleInfo.listPrice) {
      return (
        total + (book.saleInfo.listPrice.amount / 40).toFixed(2) * book.count
      );
    } else {
      return total + 32.4 * book.count;
    }
  }, 0);

  return (
    <div className="cart container">
      {context.cart.length >= 1 || context.cartApi.length >= 1 ? (
        <div className="checkout">
          <h2> Total Price : ${+totalCount + +totalPriceApi} </h2>
          <div
            className="btn"
            onClick={() => context.stateDispatch({ type: actions.CLEAR_CART })}
          >
            Clear Cart
          </div>
        </div>
      ) : (
        <h1> NO BOOKS IN CART </h1>
      )}
      {context.cart.length >= 1
        ? context.cart.map((item) => (
            <div className="item" key={item.id}>
              <img src={item.img} alt="" />
              <div className="info">
                <div className="price_count">
                  <div className="text">
                    <h4> {item.name} </h4>
                    <p> Price : ${item.price} </p>
                  </div>
                  <div className="count">
                    Count :
                    <span
                      onClick={() =>
                        context.stateDispatch({
                          type: actions.INCREMENT_COUNT,
                          payload: item,
                        })
                      }
                    >
                      +
                    </span>
                    <span>{item.count}</span>
                    <span
                      onClick={() =>
                        context.stateDispatch({
                          type: actions.DECREMENT_COUNT,
                          payload: item,
                        })
                      }
                    >
                      -
                    </span>
                  </div>
                </div>
                <div className="delete_subtotal">
                  <div className="subtotal">
                    SubTotal : $ {(item.price * item.count).toFixed(2)}
                  </div>
                  <div
                    className="btn"
                    onClick={() =>
                      context.stateDispatch({
                        type: actions.DELETE_ITEM,
                        payload: item,
                      })
                    }
                  >
                    Delete
                  </div>
                </div>
              </div>
            </div>
          ))
        : null}
      {context.cartApi.length >= 1
        ? context.cartApi.map((item) => (
            <div className="item" key={item.id}>
              <img
                src={
                  item.volumeInfo.imageLinks
                    ? item.volumeInfo.imageLinks.thumbnail
                    : ""
                }
                alt={item.volumeInfo.title}
              />
              <div className="info">
                <div className="price_count">
                  <h4> {item.volumeInfo.title} </h4>
                  {item.saleInfo && item.saleInfo.listPrice ? (
                    <p>
                      Price: ${(item.saleInfo.listPrice.amount / 40).toFixed(2)}
                    </p>
                  ) : (
                    <p>Price: $32.4 </p>
                  )}
                  <div className="count">
                    Count:
                    <span
                      onClick={() =>
                        context.stateDispatch({
                          type: actions.INCREMENT_COUNT_API,
                          payload: item,
                        })
                      }
                    >
                      +
                    </span>
                    {item.count}
                    <span
                      onClick={() =>
                        context.stateDispatch({
                          type: actions.DECREMENT_COUNT_API,
                          payload: item,
                        })
                      }
                    >
                      -
                    </span>
                  </div>
                </div>
                <div className="delete_subtotal">
                  <div className="subtotal">
                    SubTotal : $
                    {(
                      (item.saleInfo && item.saleInfo.listPrice
                        ? (item.saleInfo.listPrice.amount / 40).toFixed(2)
                        : 32.4) * item.count
                    ).toFixed(2)}
                  </div>
                  <div
                    className="btn"
                    onClick={() =>
                      context.stateDispatch({
                        type: actions.DELETE_FROM_API,
                        payload: item,
                      })
                    }
                  >
                    Delete
                  </div>
                </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default Cart;
