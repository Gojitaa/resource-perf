import { list } from '../rest.css'
import MovieListItem from './MovieListItem'

const MovieList = ({ movies }) => {
	const template = () => `<ul class='${list}'></ul>`
	const render = parent => {
		parent.innerHTML = template();
		movies
			.map((movie) => MovieListItem(movie).render(parent.querySelector('.list')))
	}

	return {
		render
	}
}

export default MovieList;