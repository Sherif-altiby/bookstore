import { createContext, useContext, useReducer, useState } from "react";
import reducer from "./Reducer";

const intialState = {
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  sucess: "Book Is Add to Cart Successfully",
  heart: localStorage.getItem("heart")
    ? JSON.parse(localStorage.getItem("heart"))
    : [],
  read: localStorage.getItem("read")
    ? JSON.parse(localStorage.getItem("read"))
    : [],
  cartApi: localStorage.getItem("cartApi")
    ? JSON.parse(localStorage.getItem("cartApi"))
    : [],
};

export const GlobalContext = createContext(intialState);

const ContextProvider = ({ children }) => {
  const [bookName, setBookName] = useState("");
  const [auth, setAuth] = useState({});
  const [state, dispatch] = useReducer(reducer, intialState);

  return (
    <GlobalContext.Provider
      value={{
        cart: state.cart,
        stateDispatch: dispatch,
        sucess: state.sucess,
        heart: state.heart,
        read: state.read,
        bookName: bookName,
        setBookName: setBookName,
        cartApi: state.cartApi,
        auth,
        setAuth,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;

export const useItemContext = () => {
  return useContext(GlobalContext);
};
