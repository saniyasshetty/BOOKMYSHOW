import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="mt-4">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="https://assets.mubicdn.net/images/notebook/post_images/36485/images-w1400.jpg?1670783534" alt="Movie 1" />
          <Carousel.Caption>
            <h3>Featured Movie 1</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://i.ytimg.com/vi/hTCfn_Bq-B0/maxresdefault.jpg" alt="Movie 2" />
          <Carousel.Caption>
            <h3>Featured Movie 2</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Home;
