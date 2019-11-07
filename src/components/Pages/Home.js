import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Card from '../layout/Cards';

import styled from 'styled-components';

import modal_1 from '../../assets/modal_1.jpg';
import modal_2 from '../../assets/modal_2.jpg';
import modal_3 from '../../assets/modal_3.jpg';

function Home() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

    return (
        <Styles>
            <h2 style={{ margin: 10, color: '#525151'}}>Let's choose a place to go?</h2>
            <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={modal_1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Mountain</h3>
                    <p>This could be an adventure or nature simplify?</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={modal_2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Sky and Stars</h3>
                    <p>This could be an nature or infinity?</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={modal_3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Mountain and Snow</h3>
                    <p>
                        Could you claim it?
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            <DivCards>
                <Card />
                <Card />
                <Card />
            </DivCards>
        </Styles>
    )
}

const Styles = styled.div`
   margin: 0;
   padding: 0;
`;
const DivCards = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0;
    margin-top: 20px;
    justify-content: space-around;
    flex-wrap: wrap;

`

export default Home
