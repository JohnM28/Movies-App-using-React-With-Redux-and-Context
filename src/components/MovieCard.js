import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFavouriteAction, RemoveFromFavouriteAction } from '../redux/actions/Actions';
import {Link} from "react-router-dom";
import {FaHeart} from "react-icons/fa";

const MovieCard = ({ movie }) => {
	const { favourite } = useSelector((state) => state.movies);
	const dispatch = useDispatch();
    console.log(favourite.length)

	return (
		<div className={"col-md-3 text-white"}>
                              <div className='image-container d-flex justify-content-start m-3'>
                                    <Link to={`/movies/${movie.id}`}>
                                  <img id="Movies" className={"img-thumbnail"}
                                   src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
                                  <small className={"numberCircle"}>{movie.vote_average}</small>
                                    </Link>
                                    </div>
                              <li className={"row mb-3 ms-3"}>
                                  <h5 className={"text-center fw-bold"}>{movie.title}</h5>
                                  <a className={"text-center"}
                                  onClick={() =>
                                      dispatch(
                                          favourite.find((m) => m.id == movie.id)
                                              ? RemoveFromFavouriteAction(movie.id)
                                              : addFavouriteAction(movie)
                                      )}>
                                    <FaHeart color={(favourite.find((m) => m.id == movie.id) ? `red` : `cyan`)} />
                              </a>
                                  <small className={"text-monospace text-secondary mb-3 me-3"}>
                              </small>
                              </li>
                          </div>
	);
};

export default MovieCard;