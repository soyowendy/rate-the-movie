import MovieStar from "../MovieStars";
import './style.css';

type Props = {
	score: number;
	count: number;
}

function MovieScore( {score, count} : Props) {

	return (
	<div className="rtm-score-container">
		<p className="rtm-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
		<MovieStar score={score} />
		<p className="rtm-score-count">{count} avaliações</p>
	</div>
	)
}

export default MovieScore;