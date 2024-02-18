import { useParams } from "react-router-dom";
import productsStore from "../../store/products-store";
import { Container, Divider, Paper, Typography } from "@mui/material";
import PhotoCarousel from "../PhotoCarousel/PhotoCarousel";
import Header from "../Header/Header";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import styled from "styled-components";

const StyledWrapperProduct = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TitleProduct = styled.div`
  padding: 15px;
`;

const InfoProduct = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 767px) {
    padding: 15px;
  }
`;

const ProductDetails = observer(() => {
  const { products, UpdateProducts } = productsStore;

  useEffect(() => {
    UpdateProducts();
  }, []);

  const { productId } = useParams();

  const product = products.find((item) => item.id === Number(productId));

  if (!product) {
    return;
    // <Container maxWidth="lg">
    //   <Typography variant="h5">Загрузка</Typography>
    //   <Typography variant="h5">Товар не найден</Typography>
    // </Container>
  }

  return (
    <>
      <Header />

      <Container maxWidth="lg">
        <Paper
          elevation={3}
          sx={{ backgroundColor: "#dafbff3d", height: "100%" }}
        >
          <div key={productId}>
            <TitleProduct />
            <StyledWrapperProduct>
              <PhotoCarousel images={product.images} />
              <InfoProduct>
                <Typography variant="h4">{product.title}</Typography>
                <Divider sx={{ borderColor: "black", border: 1 }} />
                <Typography variant="h5">{product.description}</Typography>
                <Divider sx={{ borderColor: "black", border: 1 }} />
                <Typography variant="h5">Brand: {product.brand}</Typography>
                <Typography variant="h5">Price: ${product.price}</Typography>
                <Typography variant="h5">Stock: {product.stock}</Typography>
              </InfoProduct>
            </StyledWrapperProduct>
          </div>
        </Paper>
      </Container>
    </>
  );
});

export default ProductDetails;
