import './style.css'

function Navbar() {
	return (
		<header>
			<nav className="container">
				<div className="rtm-nav-content">
					<h1>Rate the Movie</h1>
					<div className='rtm-nav-content-links'>
						<i className="bi bi-github"></i>
						<i className="bi bi-linkedin"></i>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Navbar;