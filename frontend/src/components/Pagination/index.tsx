import './style.css'

function Pagination() {
	return (
		<div className='rtm-pagination-container'>
			<div className='rtm-pagination-box'>
				<button className='rtm-pagination-button' disabled={true} >
					<i className='bi bi-arrow-left'></i>
				</button>
				<p>{`${1} de ${3}`}</p>
				<button className='rtm-pagination-button' disabled={false} >
				<i className='bi bi-arrow-right'></i>
				</button>
			</div>
		</div>
	)
}

export default Pagination;