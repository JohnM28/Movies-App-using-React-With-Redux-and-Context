import React, {useContext, useEffect, useState} from "react";
import { axiosInstance } from "../network";
import './movies.css'
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';
import {LanguageContext} from "../context/languageContext";

const Movies = () => {
    const { contextLang, setContextLang } = useContext(LanguageContext);
  useEffect(() => {
    axiosInstance
      .get("popular", {
        params: {
            api_key: "52fe7bd84169f23b2cfd370a8834a2f2",
            language: contextLang,
        },
      })
      .then((res) => setMovieList(res.data.results))
      .catch((err) => console.log(err));
  }, [contextLang]);

  const [movieList, setMovieList] = useState([]);
  const { movies } = useSelector((state) => state.movies);
    console.log(contextLang)
  return(

      <>
          <div className={"container-fluid bg-dark"}>
              <div className={"container"}>
              <div className={"row "}>
                  <h1 className={"text-white text-center py-4"}>Popular Movies Right Now!</h1>
                  {movies && movieList.map((movie) => {
                      return(

                        <MovieCard movie={movie} />

                      )} )
                  }
                  </div>
              </div>
          </div>
      </>
)

}

export default Movies;