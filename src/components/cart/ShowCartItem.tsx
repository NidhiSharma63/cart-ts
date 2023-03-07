import { useState, useEffect, useContext } from "react";
import { cartContext } from "../../context/CartContex";
import Item from "../Home/Item";
const ShowCartItem = () => {
  const { state } = useContext(cartContext);

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {}, [state.cartItem]);

  return <div></div>;
};

export default ShowCartItem;
