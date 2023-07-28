const API_KEY = "c19b2bf1e6451937304e8aa7c7cec54d";

// {
// 	process.env.API_KEY;
// }

const requests = {
	fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
	fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en=US`,
	fectchActionMovies: `discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchDocumentareis: `discover/movie?api_key=${API_KEY}&with_genres=99`,
	fetchHistory: `discover/movie?api_key=${API_KEY}&with_genres=36`,
};
export default requests;
