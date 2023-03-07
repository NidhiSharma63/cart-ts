import Grid from "@mui/material/Grid";

import Item from "../components/Home/Item";

import { useFecth } from "../hooks/useFetch";

const Home = () => {
  const { data } = useFecth();
  return (
    <Grid container mt={8} ml={0.5} spacing={2}>
      {data?.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </Grid>
  );
};

export default Home;
