import { useEffect } from "react";
import productsStore from "../../store/products-store";
import { observer } from "mobx-react-lite";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import styled from "styled-components";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";


const LOADING = "Загрузка...";
const ERROR = "ОШИБКА";
const TEXT_BUTTON = "Подробнее";
const CURRENCY = "$";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductList = observer(() => {
  const { UpdateProducts, products, isLoading, isError } = productsStore;

  useEffect(() => {
    UpdateProducts();
  }, []);

  return (
    <>
      <Header />

      <Container maxWidth="lg">
        <Grid2 container spacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {isLoading && <span className="loading">{LOADING}</span>}
          {isError && <p className="loading">{ERROR}</p>}

          {products.map((item) => {
            return (
              <Grid2 xs={12} md={4} key={item.id}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <CardMedia sx={{ height: 150 }} image={item.thumbnail} />
                  <CardContent>
                    <StyledWrapper>
                      <Typography variant="h6">{item.title}</Typography>
                      <Typography variant="h6">{CURRENCY}{item.price}</Typography>
                    </StyledWrapper>
                    <Divider sx={{ borderColor: "black" }} />
                  </CardContent>
                  <CardActions sx={{ justifyContent: "end" }}>
                    <Button variant="contained">
                      <Link
                        to={`/shop/productDetails/${item.id}`}
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        {TEXT_BUTTON}
                      </Link>
                    </Button>
                    {/* <Button variant="outlined">Купить</Button> */}
                  </CardActions>
                </Card>
              </Grid2>
            );
          })}
        </Grid2>
      </Container>
    </>
  );
});
export default ProductList;
