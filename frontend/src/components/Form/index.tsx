import axios, { AxiosRequestConfig } from 'axios';
import { validateEmail } from '../../utils/validate';
import './style.css';
import { BASE_URL } from '../../utils/requests';
import { useNavigate } from 'react-router-dom';

type Props = {
	movieId: number | undefined;
}

function Form({movieId}: Props) {

	const navigate = useNavigate();

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const email = (event.target as any).email.value;
		const score = (event.target as any).score.value;

		if (!validateEmail(email)) {
			return;
		}

		const config: AxiosRequestConfig = {
			baseURL: BASE_URL,
			method: "PUT",
			url: "/scores",
			data: {
				email: email,
				movieId: movieId,
				score: score
			}
		}

		axios(config).then(response => {
			navigate("/");
		})
	}

	return (
		<form className="rtm-form" onSubmit={handleSubmit}>
			<div className="form-group rtm-form-group">
				<label htmlFor="email">E-mail</label>
				<input type="email" className="form-control" id="email" />
			</div>
			<div className="form-group rtm-form-group">
				<label htmlFor="score">Your Rate</label>
				<select className="form-control" id="score">
					<option>1</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
					<option>5</option>
				</select>
			</div>
			<div className="rtm-form-btn-container">
				<button type="submit" className="btn btn-primary rtm-btn">Send</button>
			</div>
		</form>
	)
}

export default Form;