import React, { useState } from 'react';
import axois from 'axios';

import { Container } from '../../components/Grid/index';
import Jumbotron from '../../components/Jumbotron/index';

import './homepage.css';

function Home() {
    const [movieTitle, setMovieTitle] = useState('');
    let showRes = false;

    function searchMovie() {
        showLoading();

        axois.get(`https://omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${movieTitle}`).then(res => {
            showRes = true;
            console.log(res);
        });
    }

    function showLoading() {
        const loadingRes = document.getElementById('loadingResults');

        const dot1 = document.getElementById('dot1');
        const dot2 = document.getElementById('dot2');
        const dot3 = document.getElementById('dot3');


        if (!showRes) {
            if (loadingRes.getAttribute('showing') === 'false') {
                loadingRes.setAttribute('showing', 'true');

                loadingRes.style.display = 'flex';
                loadingRes.classList.add('animate__animated', 'animate__fadeIn');

                setTimeout(() => {
                    loadingRes.classList.remove('animate__animated', 'animate__fadeIn');
                }, 2000);
            }

            setTimeout(() => {
                dot1.classList.add('animate__animated', 'animate__bounceIn');
                dot1.style.opacity = '1';

                setTimeout(() => {
                    dot1.classList.remove('animate__animated', 'animate__bounceIn');
            
                    dot2.classList.add('animate__animated', 'animate__bounceIn');
                    dot2.style.opacity = '1';

                    setTimeout(() => {
                        dot2.classList.remove('animate__animated', 'animate__bounceIn');

                        dot3.classList.add('animate__animated', 'animate__bounceIn');
                        dot3.style.opacity = '1';

                        setTimeout(() => {
                            dot3.classList.remove('animate__animated', 'animate__bounceIn');

                            dot1.classList.add('animate__animated', 'animate__fadeOut');
                            dot2.classList.add('animate__animated', 'animate__fadeOut');
                            dot3.classList.add('animate__animated', 'animate__fadeOut');

                            setTimeout(() => {
                                dot1.style.opacity = '0';
                                dot2.style.opacity = '0';
                                dot3.style.opacity = '0';

                                dot1.classList.remove('animate__animated', 'animate__fadeOut');
                                dot2.classList.remove('animate__animated', 'animate__fadeOut');
                                dot3.classList.remove('animate__animated', 'animate__fadeOut');

                                setTimeout(() => {
                                    showLoading();
                                }, 100);
                            }, 1000);
                        }, 1000)
                    }, 1000);
                }, 1000);
            }, 400);
        } else {
            loadingRes.setAttribute('showing', 'false');

            loadingRes.classList.add('animate__animated', 'animate__fadeOut');
            
            setTimeout(() => {
                loadingRes.classList.remove('animate__animated', 'animate__fadeOut');
                loadingRes.style.display = 'none';
            }, 1000);
        }
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

            <h1 id='loadingResults' showing='false'>
                Loading Results
                <span id='dot1' className='dot'>.</span>
                <span id='dot2' className='dot'>.</span>
                <span id='dot3' className='dot'>.</span>
            </h1>
        </Container>
    )
}

export default Home;
