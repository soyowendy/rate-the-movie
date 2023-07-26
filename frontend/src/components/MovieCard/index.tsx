import { Link } from "react-router-dom";
import MovieScore from "../MovieScore";

function MovieCard() {
	const movie = {
		id: 1,
		image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
		title: "Oppenheimer",
		count: 3,
		score: 4.9
	}

	return (
		<div>
			<img className="rtm-movie-card-image" src={movie.image} alt={movie.title} />
			<div className="rtm-card-bottom-container">
				<h3>{movie.title}</h3>
				<MovieScore/>

				<Link to={`/movie/${movie.id}`}>
					<div className="btn btn-primary rtm-btn">Rate</div>
				</Link>
			</div>
		</div>
	)
}

export default MovieCard;
