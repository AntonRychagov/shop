import { observer } from "mobx-react-lite";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled.img`
  height: 400px;
  width: 100%;
  margin: auto;
  object-fit: cover;

  @media (min-width: 768px) {
    width: 100%; /* Пример новой ширины для больших экранов */
    object-fit: contain;
  }
`;

const StyledCarousel = styled.div`
  width: 40%;
  padding: 0 40px 40px 40px;

  @media (max-width: 767px) {
    width: 88%;
  }

  @media (max-width: 600px) {
    width: 73%;
  }

  @media (max-width: 500px) {
    width: 78%;
  }
`;

const PhotoCarousel = observer((props: { images: string[] }) => {
  const { images } = props;

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  const image = images.map((img: string, index: number) => {
    return (
      <div key={index}>
        <StyledSlider src={img} alt={`Slide ${index}`} />
      </div>
    );
  });

  return (
    <StyledCarousel>
      <Slider {...settings}>{image}</Slider>
    </StyledCarousel>
  );
});

export default PhotoCarousel;
