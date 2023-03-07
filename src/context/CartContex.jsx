import { createContext, useReducer, Reducer } from "react";

export const cartContext = createContext();

const initialState = {
  cartItem: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Add_To_Cart":
      return {
        ...state,
        cartItem: [action.payload, ...state.cartItem],
      };

    case "Update_Cart":
      return {
        ...state,
        cartItem: state.cartItem.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case "Remove_Cart":
      return {
        ...state,
        cartItem: state.cartItem.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };
  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};
