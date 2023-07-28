import React from "react";
import Row from "../Row";
import request from "../Nrequest";

const Home = () => {
	return (
		<>
			<Row
				isposter={true}
				fetchUrl={request.fetchNetflixOriginals}
				title="NETFLIX ORIGINALS"
			/>
			<Row
				isposter={true}
				fetchUrl={request.fetchUpcomming}
				title="Up comming Movies"
			/>
			<Row
				isposter={false}
				fetchUrl={request.fetchTrending}
				title="Trending Now"
			/>
			<Row
				isposter={false}
				fetchUrl={request.fetchTopRatedMovies}
				title="Top Rated"
			/>
		</>
	);
};

export default Home;
