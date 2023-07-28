import React from "react";
import { useEffect, useState } from "react";
import requests from "./Nrequest";
import axios from "axios";
import "./Nabnner.css";

const base_url = "api.themoviedb.org/3";
const base_url2 = "https://image.tmdb.org/t/p/original/";

function Kbanner(title) {
	const [movie, setMovie] = useState([]);
	// useEffect(() => {
	// 	async function fetchData() {
	// 		const request = await axios.get(requests.fetchNetflixOriginals);
	// 		setMovie(
	// 			request.data.results[
	// 				Math.floor(Math.random() * request.data.results.length)
	// 			]
	// 		);
	// 		console.log(request.data.results);
	// 		console.log(request);
	// 		return request;
	// 	}
	// 	fetchData();
	// }, []);

	useEffect(() => {
		async function gettMovie() {
			const request = await axios.get(
				"https://api.themoviedb.org/3/discover/tv?api_key=c19b2bf1e6451937304e8aa7c7cec54d&include_adult=false&language=en-US"
			);
			// `url("${base_url}${movie?.backdrop_path}")`
			setMovie(
				request.data.results[
					Math.floor(Math.random() * request.data.results.length)
				]
			);
			console.log(request);
			return request;
		}
		gettMovie();
	}, []);

	return (
		<header
			className="banner"
			style={{
				backgroundSize: "cover",
				backgroundImage: `url("${base_url2}${movie?.backdrop_path}")`,
				backgroundPosition: "center center",
			}}
		>
			<div className="banner__contents">
				<h1 className="banner__title">
					{movie?.title || movie?.name || movie.original_name}
				</h1>

				<div className="banner__button">
					<button className="banner__button">Play</button>
					<button className="banner__button">My List</button>
				</div>
				{/* <h1 className="banner__description">
					{truncate(movie?.overview, 150)}
				</h1> */}
			</div>
			<div className="banner__fedBottom"></div>
		</header>
	);
}

export default Kbanner;
