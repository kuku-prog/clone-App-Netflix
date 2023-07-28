import React, { useEffect, useState } from "react";
import "./row.css";
//
import axios from "./axios";
const base_url = "https://image.tmdb.org/t/p/original";

const Row = ({ isposter, fetchUrl, title }) => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		fetchmovie();
	}, []);

	const fetchmovie = async () => {
		const response = await axios?.get(fetchUrl);
		setMovies(response.data.results);
	};

	// console.log(movies);
	return (
		<div className="row">
			<h1>{title}</h1>
			{/* <div className="imagecontainer">
      {movies.map((singlemovie) => {
         <img
            key={singlemovie.id}
            src={`${base_url}${isposter ? singlemovie.poster_path : singlemovie.backdrop_path}`}
            alt={`${singlemovie.name}`}
            className={isposter ? 'row__posterLarge' : ''}
            // Call the function with the 'movie' parameter
          />
      })}
       
      </div> */}
			<div className="imagecontainer d-flex">
				{movies &&
					movies.map((movie) => (
						<img
							key={movie.id}
							className={isposter ? "row__posterLarge" : ""}
							src={`${base_url}${
								isposter ? movie.poster_path : movie.backdrop_path
							}`}
							alt={`${movie.name}`}
							// Call the function with the 'movie' parameter
						/>
						//onClick={() => hundleclick(movie)}
					))}
			</div>
		</div>
	);
};

export default Row;
