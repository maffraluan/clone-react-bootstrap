import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import styled from 'styled-components';
import GreyImage from '../../assets/grayImage.jpg';
import ModalAnimation from './Modal';

function Cards(props) {

    return (
        <Styles>
           <Card style={{ width: '18rem', padding: 10 }}>
            <Card.Img variant="top"  src={GreyImage} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <ModalAnimation></ModalAnimation>
            </Card.Body>
            </Card>
        </Styles>
    )
}

const Styles = styled.div`

    }
    GreyImage {
        width: 286px;
        height: 180px;
`;


export default Cards
