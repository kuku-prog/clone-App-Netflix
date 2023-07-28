// const API_KEY = "c19b2bf1e6451937304e8aa7c7cec54d";

// const requests = {
// 	fetchTVShow: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
// 	fetchAiringToday: `/discover/tv?api_key=${API_KEY}&include_adult=false&language=en-US`,
// };
// export default requests;

// // /trending/all/week?api_key=c19b2bf1e6451937304e8aa7c7cec54d&language=en-US`

// import "./App.css";
// import Nbanner from "./Nbanner";
// import requests from "./Nrequest";

// function App() {
// 	return (
// 		<div>
// 			<Nbanner title="fetchTVShow" fetchUrl={requests.fetchTVShow} />
// 			<Nbanner title="fetchAiringToday" fetchUrl={requests.fetchAiringToday} />
// 		</div>
// 	);
// }

const API_KEY = "177269945e48f57f144fce22779a7dd9";
const requests = {
	fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
	fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
	fetchUpcomming: `/movie/upcoming?api_key=${API_KEY}&language=eng&page=1`,
	fetchPlayknow: `/movie/now_playing?api_key=${API_KEY}&language=eng&page=44`,
	fetchOldMovie: `discover/movie?api_key=${API_KEY}&include_adult=false&language=en&page=54&primary_release_year=1980&sort_by=popularity.asc&with_genres=action`,
};
export default requests;
// https://api.themoviedb.org/3/
// https://api.themoviedb.org/3/
//https://api.themoviedb.org/3/movie/upcoming?api_key=$177269945e48f57f144fce22779a7dd9&language=eng&page=2

//fetchTrending: `/trending/all/week?api_key=$177269945e48f57f144fce22779a7dd9&language=en-US`

//
// https://api.themoviedb.org/3/movie/now_playing?api_key=$177269945e48f57f144fce22779a7dd9&&language=en&page=44

//  https://api.themoviedb.org/3/movie/now_playing?api_key=$177269945e48f57f144fce22779a7dd9&language=en&page=44

//https://api.themoviedb.org/3/movie/now_playing?api_key=177269945e48f57f144fce22779a7dd9&language=eng&page=44'
