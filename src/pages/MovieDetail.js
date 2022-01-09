import {Link, useParams} from "react-router-dom";
import { useState, useEffect } from "react";
import { axiosInstance } from './../network/index';
import './movies.css'

export default function MovieDetails() {
    const params = useParams();
    const [movieDetails, setmovieDetails] = useState([]);

    console.log(params);


    useEffect(() => {
        axiosInstance
            .get(`${params.id}`, {
                params: {
                    api_key: "52fe7bd84169f23b2cfd370a8834a2f2",
                },
            })
            .then((res) => setmovieDetails(res.data))
            .catch((err) => console.log(err));
    }, []);
    return <div className={"container-fluid bg-dark"}>
        <div className={'container text-white  py-4'}>

            <h1 className={'text-center'}>Details page</h1>
            <div id="poster" className='image-container  d-flex justify-content-start m-3'>
                <img  className={"img-thumbnail "}
                      src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}/>
                <small className={"numberCircle"}>{movieDetails.vote_average}</small>
            </div>
            <h3>{movieDetails.title}</h3>
            <h5>Description : {movieDetails.overview}</h5>
            <h5>Popularity : {movieDetails.popularity}</h5>
            <h6>Release Date : {movieDetails.release_date}</h6>
        </div>
    </div>;
}