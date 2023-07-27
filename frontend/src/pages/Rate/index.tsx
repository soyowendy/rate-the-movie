import { Link, useParams } from "react-router-dom";
import Form from "../../components/Form";
import './style.css';
import { Movie } from "../../types/movie";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/requests";

function Rate() {
	const params = useParams();

	const [movie, setMovie] = useState<Movie>();

	useEffect(() => {
		axios.get(`${BASE_URL}/movies/${params.movieId}`)
			.then(response => {
				setMovie(response.data);
			});
	}, [params.movieId]);

	return (
		<div className="rtm-form-container">
			<img className="rtm-movie-card-image" alt={`${movie?.title} poster`} src={movie?.image} />
			<div className="rtm-card-bottom-container">
				<h3>{movie?.title}</h3>
				<Form movieId={movie?.id}/>
				<Link to="/">
					<button className="btn btn-primary rtm-btn mt-3">Cancel</button>
				</Link>
			</div>
		</div>
	)
}

export default Rate;
