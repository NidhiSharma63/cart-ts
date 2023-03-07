import { createContext, useReducer } from "react";

export const dataContext = createContext();

const initialState = {
  data: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Get_Data":
      return {
        ...state,
        data: [action.payload],
      };

    default:
      return state;
  }
};
export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };
  return <dataContext.Provider value={value}>{children}</dataContext.Provider>;
};
