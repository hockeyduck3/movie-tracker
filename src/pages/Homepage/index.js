import React from 'react';

import { Container } from '../../components/Grid/index';
import Jumbotron from '../../components/Jumbotron/index';

import './homepage.css';

function Home() {
    return (
        <Container>
            <Jumbotron id='homepageJumbo'>
                <h1>Hello there!</h1>
            </Jumbotron>
        </Container>
    )
}

export default Home;
