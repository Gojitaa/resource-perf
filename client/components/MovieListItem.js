import { listItem } from '../rest.css'

const MovieListItem = ({ title, image }) => {
	const template = () => 
		`<li class='${listItem}'>
			<div>${title}</div>
			<div class='movie-image-container'>
				<img class='movie-image' src='${image}' alt='${title}'/>
			</div>
		</li>`
	const render = parent => {
		parent.innerHTML += template();
	}

	return {
		render
	}
}

export default MovieListItem