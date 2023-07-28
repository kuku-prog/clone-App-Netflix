import Row from "./components/Row";
import "./components/Row.css";
import requests from "./requests";
import Banner from "./components/Banner";
import "./App.css";
import Nav from "./components/Nav";

// import dotenv from "dotenv";
// dotenv.configDotenv();

// {process.env.API}//Where I need that document or password that

function App() {
	return (
		<div className="App">
			<Nav />
			<Banner />
			<Row
				title="NETFLIX ORIGINALS"
				fetchUrl={requests.fetchNetflixOriginals}
				isLargeRow={true} //optional, not a must to call it
			/>
			<Row title="Trending Now" fetchUrl={requests.fetchTrending} />
			<Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
			<Row title="Action Movies" fetchUrl={requests.fectchActionMovies} />
			<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<Row title="History Movies" fetchUrl={requests.fetchHistory} />
			<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
			<Row
				title="Docummentaries Movies"
				fetchUrl={requests.fetchDocumentareis}
			/>

			<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
		</div>
	);
}

export default App;
