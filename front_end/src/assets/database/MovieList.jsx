'use client';

import axios from 'axios';
import React, { useState, useEffect } from 'react'

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = async () => {
        const response1 = await axios({
            method: "get",
            url: "https://api.themoviedb.org/3/movie/now_playing",
            params: {
                api_key: "e8c58f374647c71f1c7342cf4f5d2e73",
                language: "pt-BR",
                page: 1,
            }
        });
        const response2 = await axios({
            method: "get",
            url: "https://api.themoviedb.org/3/movie/now_playing",
            params: {
                api_key: "e8c58f374647c71f1c7342cf4f5d2e73",
                language: "pt-BR",
                page: 2,
            }
        });

        const allMovies = [...response1.data.results, ...response2.data.results];

        const first25Movies = allMovies.slice(0, 25);
        
        setMovies(allMovies);
    }
    console.log(movies);

    return (
        <>
        </>
    )
}

export default MovieList