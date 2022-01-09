import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MovieCard from '../components/MovieCard';


const FavouritePage = () => {
	const { favourite } = useSelector((state) => state.movies);
	return (
		      <>
          <div className={"container-fluid bg-dark"}>
              <div className={"container"}>
              <div className={"row "}>
                  <h1 className={"text-white text-center py-4"}>Your Favourite movies</h1>
                  {favourite && favourite.map((movie) => {
                      return(

                          <MovieCard movie={movie} />

                      )} )
                  }
                  </div>
              </div>
          </div>
      </>
	);
};

export default FavouritePage;