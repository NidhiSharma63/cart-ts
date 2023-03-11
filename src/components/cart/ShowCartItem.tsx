import { useState, useEffect, useContext } from "react";
import { cartContext } from "../../context/CartContex";
import { dataContext } from "../../context/DataContext";
import Item from "../Home/Item";
import Grid from "@mui/material/Grid";

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

const ShowCartItem = () => {
  const { state } = useContext(cartContext);
  const { dataState } = useContext(dataContext);

  const [cartItems, setCartItems] = useState<IData[]>([]);

  useEffect(() => {
    const items = dataState.data.filter((item: IData) => {
      return state.cartItem.find(
        (cartItem: { id: number; quantity: number }) => cartItem.id === item.id
      );
    });
    setCartItems(items);
  }, [dataState.data, state.cartItem]);

  return (
    <Grid container mt={8} ml={0.5} spacing={2}>
      {cartItems?.map((item: IData) => {
        return <Item key={item.id} item={item} />;
      })}
    </Grid>
  );
};

export default ShowCartItem;
