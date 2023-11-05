import * as actions from "./ActionTypes";

const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_ITEM_TO_CART:
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        const updatedCart = state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, count: item.count + 1 };
          }
          return item;
        });
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        const localCart = [...state.cart, action.payload];
        localStorage.setItem("cart", JSON.stringify(localCart));
        return {
          ...state,
          cart: localCart,
        };
      }
    case actions.DELETE_ITEM:
      const updatedCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return {
        ...state,
        cart: updatedCart,
      };
    case actions.INCREMENT_COUNT:
      const updatedCartCount = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(updatedCartCount));
      return {
        ...state,
        cart: updatedCartCount,
      };
    case actions.DECREMENT_COUNT:
      const updatedIncrementtCount = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          if (item.count > 1) {
            return { ...item, count: item.count - 1 };
          }
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(updatedIncrementtCount));
      return {
        ...state,
        cart: updatedIncrementtCount,
      };
    case actions.HEART_ITEM:
      const existingHeart = state.heart.find(
        (item) => item.id === action.payload.id
      );
      if (existingHeart) {
        const updatedHeart = state.heart.filter(
          (item) => item.id !== action.payload.id
        );
        localStorage.setItem("heart", JSON.stringify(updatedHeart));
        return {
          ...state,
          heart: updatedHeart,
        };
      } else {
        const updatedHeart = [
          ...state.heart,
          { ...action.payload, liked: true },
        ];
        localStorage.setItem("heart", JSON.stringify(updatedHeart));
        return {
          ...state,
          heart: updatedHeart,
        };
      }
    case actions.CLEAR_CART:
      localStorage.setItem("cart", []);
      localStorage.setItem("cartApi", []);
      return {
        ...state,
        cart: [],
        cartApi: [],
      };
    case actions.UN_HEART_ITEM:
      const updatedHeart = state.heart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, liked: false };
        } else {
          return item;
        }
      });
      localStorage.setItem("heart", JSON.stringify(updatedHeart));
      const filteredData = state.heart.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("heart", JSON.stringify(filteredData));
      return {
        ...state,
        heart: filteredData,
      };
    case actions.READ_BOOK:
      const existingReadBook = state.read.find(
        (item) => item.id === action.payload.id
      );
      if (existingReadBook) {
        const udatedReadBook = state.read.filter(
          (item) => item.id !== action.payload.id
        );
        localStorage.setItem("read", JSON.stringify(udatedReadBook));
        return {
          ...state,
          read: udatedReadBook,
        };
      } else {
        const udatedReadBook = [
          ...state.read,
          { ...action.payload, read: true },
        ];
        localStorage.setItem("read", JSON.stringify(udatedReadBook));
        return {
          ...state,
          read: udatedReadBook,
        };
      }
    case actions.UN_READ_BOOK:
      const unReadBook = state.read.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("read", JSON.stringify(unReadBook));
      return {
        ...state,
        read: unReadBook,
      };
    case actions.ADD_FROM_API:
      const existApi = state.cartApi.find(
        (item) => item.id === action.payload.id
      );
      if (existApi) {
        const Api_cart = state.cartApi.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, count: item.count + 1 };
          }
          return item;
        });
        localStorage.setItem("cartApi", JSON.stringify(Api_cart));
        return {
          ...state,
          cartApi: Api_cart,
        };
      } else {
        const Api_cart = [...state.cartApi, { ...action.payload, count: 1 }];
        localStorage.setItem("cartApi", JSON.stringify(Api_cart));
        return {
          ...state,
          cartApi: Api_cart,
        };
      }
    case actions.DELETE_FROM_API:
      const delApi = state.cartApi.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("cartApi", JSON.stringify(delApi));
      return {
        ...state,
        cartApi: delApi,
      };
    case actions.INCREMENT_COUNT_API:
      const upDatedCount = state.cartApi.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      });
      localStorage.setItem("cartApi", JSON.stringify(upDatedCount));
      return {
        ...state,
        cartApi: upDatedCount,
      };
    case actions.DECREMENT_COUNT_API:
      const upDatedCountDecrement = state.cartApi.map((item) => {
        if (item.id === action.payload.id) {
          if (item.count > 1) {
            return { ...item, count: item.count - 1 };
          }
        }
        return item;
      });
      localStorage.setItem("cartApi", JSON.stringify(upDatedCountDecrement));
      return {
        ...state,
        cartApi: upDatedCountDecrement,
      };
    default:
      return state;
  }
};

export default reducer;
