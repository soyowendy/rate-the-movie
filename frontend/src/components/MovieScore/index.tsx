import MovieStar from "../MovieStars";
import './style.css';

function MovieScore() {
	const score = 4.5;
	const count = 15;
	return (
	<div className="rtm-score-container">
		<p className="rtm-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
		<MovieStar/>
		<p className="rtm-score-count">{count} avaliações</p>
	</div>
	)
}

export default MovieScore;