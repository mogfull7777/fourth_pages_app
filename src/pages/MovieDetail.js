import React, {useEffect, useState} from 'react';
import axios from "axios";
import { useParams } from "react-router-dom"

const MovieDetail = () => {

    const { moviesid } = useParams();

    const [movies, setMovies] = useState({});

    const getMoviesInfo = async () => {
        const address = `https://api.themoviedb.org/3/movie/${moviesid}?api_key=082f2526d129a66e53e595b94fce8985`;

        try {

            const res = await axios.get(address)

            setMovies(res.data)

        } catch (err) {
            console.log(err)
        }

    };

useEffect(() => {
    getMoviesInfo()
}, []);

    return (
        <div>
            <h1>{moviesid}</h1>
            <h2>{movies.original_title}</h2>
            <h3>{movies.overview}</h3>
        </div>
    );
};

export default MovieDetail;

//https://image.tmdb.org/t/p/w500