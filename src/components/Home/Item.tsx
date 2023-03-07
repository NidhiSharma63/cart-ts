import { useState, MouseEvent, useContext } from "react";
import { IItemProps } from "../../Interfaces/interfaces";
import { cartContext } from "../../context/CartContex";

import {
  Box,
  Grid,
  Typography,
  Button,
  CardContent,
  CardMedia,
  CardActions,
  Card,
} from "@mui/material";

const Item = ({ item }: IItemProps) => {
  const [isAddCart, setIsAddCart] = useState<boolean>(true);
  const [count, setCount] = useState<number>(1);

  const { dispatch } = useContext(cartContext);

  const hideCartButton = (event: MouseEvent<HTMLButtonElement>, id: number) => {
    setIsAddCart(false);
    dispatch({ type: "Add_To_Cart", payload: { id, quantity: count } });
  };

  const showCartButton = (event: MouseEvent<HTMLButtonElement>, id: number) => {
    setIsAddCart(true);
    dispatch({ type: "Remove_Cart", payload: { id } });
  };

  const increaseCart = (event: MouseEvent<HTMLButtonElement>, id: number) => {
    setCount((prev) => prev + 1);
    dispatch({ type: "Update_Cart", payload: { id, quantity: count + 1 } });
    console.log(count);
  };

  const decreaseCart = (event: MouseEvent<HTMLButtonElement>, id: number) => {
    if (count !== 1) {
      setCount((prev) => prev - 1);
      dispatch({ type: "Update_Cart", payload: { id, quantity: count - 1 } });
    }
    console.log(count);
  };

  return (
    <Grid item xs={4}>
      <Card sx={{ maxWidth: 345, minheight: 450, cursor: "pointer" }}>
        <CardMedia
          sx={{ height: 140 }}
          image={`${item.image}`}
          title={`${item.title}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description.slice(0, 97)}..
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">${item.price}</Button>
          {isAddCart ? (
            <Button
              variant="contained"
              size="small"
              onClick={(e) => hideCartButton(e, item.id)}
            >
              Add to cart
            </Button>
          ) : (
            <Box display="flex" alignItems="center">
              <Button size="small" onClick={(e) => increaseCart(e, item.id)}>
                +
              </Button>
              <Typography>{count}</Typography>
              <Button size="small" onClick={(e) => decreaseCart(e, item.id)}>
                -
              </Button>
              <Button
                variant="contained"
                color="error"
                size="small"
                onClick={(e) => showCartButton(e, item.id)}
              >
                Remove
              </Button>
            </Box>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Item;
