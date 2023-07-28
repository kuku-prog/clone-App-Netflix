import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "../axios"; // here what is imported is 'instance' form axios file
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const base_url = "https://image.tmdb.org/t/p/original/"; //where to we get this base URL??

function Row({ title, fetchUrl, isLargeRow }) {
	const [movies, setMovies] = useState([]);
	const [trailerUrl, setTrailerUrl] = useState("");

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl); // axios here is still the 'instance' // await here is same as promise
			// console.log(request);
			setMovies(request.data.results); // represents what we need form the fetched object
			// console.log(request.data.results);
			return request;
		}
		fetchData();
	}, [fetchUrl]); // fetchUrl here is the dependancy for the useEffect to follow depending of it.
	// console.log(movies);

	const opts = {
		height: "390",
		width: "100%",
		playerVars: {
			autoplay: 1,
		},
	};

	const handleClick = (movie) => {
		if (trailerUrl) {
			setTrailerUrl("");
		} else {
			movieTrailer(movie?.title || movie?.name || movie.original_name)
				.then((url) => {
					const urlParams = new URLSearchParams(new URL(url).search);
					//URL.searchParams property to make it easy to parse out the parameters from the query string
					setTrailerUrl(urlParams.get("v"));
				})
				.catch((error) => console.log(error));
		}
	};

	return (
		<div className="row">
			<h1>{title}</h1>
			<div className="row__posters">
				{/* __ is Block Element Modifier */}
				{movies.map((movie) => (
					<img
						onClick={() => handleClick(movie)}
						className={`row__poster ${isLargeRow && "row__posterLarge"}`}
						src={`${base_url}${
							isLargeRow ? movie.poster_path : movie.backdrop_path // ternery operator
						}`}
						// template literal??

						alt={movie.name}
						//
					/>
				))}
			</div>

			<div style={{ padding: "40px" }}>
				{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
			</div>
		</div>
	);
}

export default Row;
