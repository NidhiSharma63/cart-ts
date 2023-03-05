import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

interface IItemProps {
  item: {
    category: string;
    description: string;
    id: Number;
    image: string;
    price: string;
    rating: {
      count: Number;
      rate: Number;
    };
    title: string;
  };
}

const Item = ({ item }: IItemProps) => {
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
          <Button variant="contained" size="small">
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Item;
