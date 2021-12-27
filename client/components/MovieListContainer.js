import * as _ from 'lodash-es'
import MovieList from './MovieList'

const getMovies = () => fetch(API_URL, {
	method: 'get',
}).then(resp => resp.json())

const MovieListContainer = ({ navigate }) => {
	const template = () => `
		<main>
			<section class='title'><h1>Movies</h1></section>
			<section class='list-container'></section>
		</main>
		`

	const render = async parent => {
		parent.innerHTML = template();
		const moviesResp = await getMovies()
		const movies = _.sortBy(moviesResp.items, ['title']);
		MovieList({ movies }).render(parent.querySelector('.list-container'))
	}

	return {
		render
	}
}

export default MovieListContainer;