import Row from "./Row";
import "./App.css";
import requests from "./requests";

function App() {
	return (
		<div>
			<Row
				title="NETFLIX ORIGINALS"
				fetchUrl={requests.fetchNetflixOriginals}
				isLargeRow={true}
			/>
			<Row title="Trending Now" fetchUrl={requests.fetchTrending} />
			<Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
			<Row title="Action Movies" fetchUrl={requests.fectchActionMovies} />
			<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
			<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
			<Row
				title="Docummentaries Movies"
				fetchUrl={requests.fetchDocumentareis}
			/>
		</div>
	);
}

export default App;
