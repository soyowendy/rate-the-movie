import { Link } from "react-router-dom";
import MovieScore from "../MovieScore";
import { Movie } from "../../types/movie";

type Props = {
	movie: Movie;
}

function MovieCard( { movie } : Props) {
	return (
		<div>
			<img className="rtm-movie-card-image" src={movie.image} alt={movie.title} />
			<div className="rtm-card-bottom-container">
				<h3>{movie.title}</h3>
				<MovieScore count={movie.count} score={movie.score}/>

				<Link to={`/movie/${movie.id}`}>
					<div className="btn btn-primary rtm-btn">Rate</div>
				</Link>
			</div>
		</div>
	)
}

export default MovieCard;
