import { MoviePage } from '../../types/movie';
import './style.css'

type Props = {
	page: MoviePage
	onChange: Function
}

function Pagination({page, onChange} : Props) {

	return (
		<div className='rtm-pagination-container'>
			<div className='rtm-pagination-box'>
				<button className='rtm-pagination-button' onClick={() => onChange(page.number - 1)} disabled={page.first} >
					<i className='bi bi-arrow-left'></i>
				</button>
				<p>{`${page.number + 1} de ${page.totalPages}`}</p>
				<button className='rtm-pagination-button' onClick={() => onChange(page.number + 1)} disabled={page.last} >
				<i className='bi bi-arrow-right'></i>
				</button>
			</div>
		</div>
	)
}

export default Pagination;