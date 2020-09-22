import React from 'react';

import { Container } from '../../components/Grid/index';
import Jumbotron from '../../components/Jumbotron/index';

import './homepage.css';

function Home() {
    return (
        <Container>
            <Jumbotron id='homepageJumbo'>
                <h1>Movies seen this year: (0)</h1>
                <h1>Last movie seen: (undefined)</h1>
            </Jumbotron>
        </Container>
    )
}

export default Home;
