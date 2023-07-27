import { Link } from 'react-router-dom';
import './style.css'

function Navbar() {
	return (
		<header>
			<nav className="container">
				<div className="rtm-nav-content">
					<Link to="/"><h1>Rate the Movie</h1></Link>
					<div className='rtm-nav-content-links'>
						<Link to="https://github.com/soyowendy" target="_blank"><i className="bi bi-github"></i></Link>
						<Link to="https://linkedin.com/in/souowendy" target="_blank"><i className="bi bi-linkedin"></i></Link>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Navbar;