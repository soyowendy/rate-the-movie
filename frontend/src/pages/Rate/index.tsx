import { Link } from "react-router-dom";
import Form from "../../components/Form";
import './style.css';

function Rate() {
	const movie = {
		id: 1,
		image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
		title: "Oppenheimer",
		count: 3,
		score: 4.9
	}

	return (
		<div className="rtm-form-container">
			<img className="rtm-movie-card-image" alt="Movie Poster" src={movie.image} />
			<div className="rtm-card-bottom-container">
				<h3>{movie.title}</h3>
				<Form/>
				<Link to="/">
					<button className="btn btn-primary rtm-btn mt-3">Cancel</button>
				</Link>
			</div>
		</div>
	)
}

export default Rate;
