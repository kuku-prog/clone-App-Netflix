import axios from "axios"; //this axios is just importing from the downloaded axios

const instance = axios.create({
	baseURL: "https://api.themoviedb.org/3",
});

// instance.get("/movie/top_rated");

export default instance;
