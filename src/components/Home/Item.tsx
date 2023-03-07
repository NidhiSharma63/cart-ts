import { useState, MouseEvent } from "react";
import { IItemProps } from "../../Interfaces/interfaces";

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

  const hideCartButton = (event: MouseEvent<HTMLButtonElement>) =>
    setIsAddCart(false);

  const showCartButton = (event: MouseEvent<HTMLButtonElement>) =>
    setIsAddCart(true);

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
            <Button variant="contained" size="small" onClick={hideCartButton}>
              Add to cart
            </Button>
          ) : (
            <Box display="flex" alignItems="center">
              <Button size="small">+</Button>
              <Typography>7</Typography>
              <Button size="small">-</Button>
              <Button
                variant="contained"
                color="error"
                size="small"
                onClick={showCartButton}
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
