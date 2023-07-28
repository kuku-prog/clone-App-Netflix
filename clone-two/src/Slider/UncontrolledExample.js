import React, { useEffect, useState } from "react";
import axios from "../axios";

const base_url = "https://image.tmdb.org/t/p/original";

function UncontrolledExample({ fetchUrl }) {
	const [movies, setMovies] = useState([]);
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		fetchMovie();
	}, []);

	const fetchMovie = async () => {
		const response = await axios?.get(fetchUrl);
		setMovies(response.data.results);
	};

	const handlePrevClick = () => {
		setActiveIndex((p) => (p === 0 ? movies.length - 1 : p - 1));
	};

	const handleNextClick = () => {
		setActiveIndex((p) => (p === movies.length - 1 ? 0 : p + 1));
	};

	return (
		<div id="carouselExampleFade" className="carousel slide carousel-fade">
			<div className="carousel-inner" style={{ height: "80vh" }}>
				{movies.map((movie, index) => (
					<div
						key={movie.id}
						className={`carousel-item ${index === activeIndex ? "active" : ""}`}
					>
						<img
							src={`${base_url}${movie.backdrop_path}`}
							style={{ objectFit: "contain" }}
							className="d-block w-100"
							alt="..."
						/>
					</div>
				))}
			</div>
			<button
				className="carousel-control-prev text-danger"
				type="button"
				data-bs-target="#carouselExampleFade"
				data-bs-slide="prev"
				onClick={handlePrevClick}
			>
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next text-danger"
				type="button"
				data-bs-target="#carouselExampleFade"
				data-bs-slide="next"
				onClick={handleNextClick}
			>
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
}

export default UncontrolledExample;
