import './style.css';

function Form() {
	return (
		<form className="rtm-form">
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