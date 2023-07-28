import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../axios"; //still imported instance as axios.
import requests from "../requests";
const base_url = "https://image.tmdb.org/t/p/original/";

function Banner() {
	const [movie, setMovie] = useState([]);
	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(requests.fetchNetflixOriginals);
			setMovie(
				request.data.results[
					Math.floor(Math.random() * request.data.results.length)
				]
			);
			console.log(request.data.results);
			console.log(request);
			return request;
		}
		fetchData();
	}, []);

	function truncate(str, n) {
		return str?.lenght > n ? str.substr(0, n - 1) + "..." : str;
	}

	return (
		<header
			className="banner"
			style={{
				backgroundSize: "cover",
				backgroundImage: `url("${base_url}${movie?.backdrop_path}")`,
				backgroundPosition: "center center",
			}}
		>
			{/* <img
				className="banner_img"
				// src="${base_url}${movie?.backdrop_path}"
			></img> */}

			<div className="banner__contents">
				<h1 className="banner__title">
					{movie?.title || movie?.name || movie.original_name}
				</h1>
				{/* className="banner__button" */}
				<div>
					<button className="banner__button">Play</button>
					<button className="banner__button">My List</button>
				</div>
				<h1 className="banner__description">
					{truncate(movie?.overview, 150)}
				</h1>
			</div>
			<div className="banner__fedBottom"></div>
		</header>
	);
}

export default Banner;

// useEffect(() => {
// 	fetch(`${baseURL1}${requests.fetchNetflixOriginals}`)
// 		.then((data) => {
// 			return data.json();
// 		})
// 		.then((data) => {
// 			setMovie(() => {
// 				return data.results[Math.floor(Math.random() * data.results.length)];
// 			});
// 		});
// }, []);
