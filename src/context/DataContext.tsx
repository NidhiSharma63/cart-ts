import { createContext, useReducer, ReactNode, Dispatch } from "react";

interface IData {
  category: string;
  description: string;
  id: number;
  image: string;
  price: string;
  rating: {
    count: number;
    rate: number;
  };
  title: string;
}

interface IState {
  data: IData[];
}

interface IAction {
  type: "Get_Data";
  payload: IData[];
}

interface IContextProps {
  dataState: IState;
  dispatch: Dispatch<IAction>;
}

interface IChildrenProps {
  children: ReactNode;
}

const initialState: IState = {
  data: [],
};

export const dataContext = createContext<IContextProps>({
  dataState: initialState,
  dispatch: () => null,
});

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case "Get_Data":
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export const DataContextProvider = ({ children }: IChildrenProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const dataContextValue = { dataState: state, dispatch };
  return (
    <dataContext.Provider value={dataContextValue}>
      {children}
    </dataContext.Provider>
  );
};
