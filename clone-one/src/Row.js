import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "./axios"; // here what is imported is 'instance' form axios file

const base_url = "https://image.tmdb.org/t/p/original/"; //where to we get this base URL

function Row({ title, fetchUrl, isLargeRow }) {
	const [movies, setMovies] = useState([]);

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

	return (
		<div className="row">
			<h1>{title}</h1>
			<div className="row__posters">
				{/* __ is Block Element Modifier */}
				{movies.map((movie) => (
					<img
						// className="row__poster"
						className={`row__poster ${isLargeRow && "row__posterLarge"}`}
						src={`${base_url}${movie.poster_path}`} // template literal??
						alt={movie.name}
					/>
				))}
			</div>
		</div>
	);
}

export default Row;
