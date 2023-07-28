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

// export default App;
import { useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Pagination from "react-bootstrap/Pagination";
//component

import Nav from "./components/Nav/Nav";
import Banner from "./components/Banner/Banner";
import Home from "./Pages/Home";
import Fo4 from "./Pages/Fo4";
import Secpage from "./Pages/Secpage";
import UncontrolledExample from "./Slider/UncontrolledExample";
// import Page from './components/Page/Page'

//import
import request from "./Nrequest";
import { Link, Route, Routes } from "react-router-dom";

function App() {
	const [count, setCount] = useState(0);
	let active = 1;
	let items = [];
	for (let number = 1; number <= 2; number++) {
		items.push(
			<Pagination.Item key={number}>
				<Link to={number == 1 ? "/" : "/sec"}>{number}</Link>
			</Pagination.Item>
		);
	}
	const paginationBasic = (
		<div>
			<Pagination size="sm">{items}</Pagination>
		</div>
	);

	return (
		<div className="App">
			{/* <Nav /> */}
			{/* <Banner /> */}

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sec" element={<Secpage />} />
				<Route path="*" element={<Fo4 />} />
			</Routes>
			<div className="container m-5 p-5 text-right"> {paginationBasic}</div>

			{/* <Page /> */}
		</div>
	);
}

export default App;
