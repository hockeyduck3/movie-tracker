import React, { useState } from 'react';
import axois from 'axios';

import { Container } from '../../components/Grid/index';
import Jumbotron from '../../components/Jumbotron/index';

import './homepage.css';

function Home() {
    const [movieTitle, setMovieTitle] = useState('');

    function searchMovie() {
        axois.get(`https://omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${movieTitle}`).then(res => {
            console.log(res);
        });
    }

    return (
        <Container>
            <Jumbotron id='homepageJumbo'>
                <h1>Movies seen this year: (0)</h1>
                <h1>Last movie seen: (undefined)</h1>
            </Jumbotron>

            <h1 className='searchMovieTitle'>Search for a movie below!</h1>

            <form className='input-group' onSubmit={e => {e.preventDefault(); searchMovie()}}>
                <input className='form-control mr-sm-2 searchBar' type='search' placeholder='Search for a Movie' aria-label='Search' onChange={e => setMovieTitle(e.target.value)} />
                <button className='searchBtn'><i className='fas fa-search'></i></button>
            </form>
        </Container>
    )
}

export default Home;
