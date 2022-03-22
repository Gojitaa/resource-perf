import Login from './Login'

const routes = {
	'#/movies': () => import('./MovieListContainer'),
	'#/movies/{id}': () => import('./MovieDetails')
}

/*const routes = {
	'/': Login,
	'#/movies': MovieListContainer,
	'#/movies/{id}': MovieDetails,
}*/

const App = ({ root, initLoginTracking }) => {
	window.addEventListener("popstate", () =>
  	render(root)
  );

	const navigate = pathname => {
		history.pushState({}, pathname, location.origin + pathname)
		render(root);
	}

	const render = parent => {
		/*const page = routes[location.hash || '/'];
		page({ navigate }).render(parent);*/
		if(!location.hash || location.hash === '/') {
			Login({ navigate, initLoginTracking }).render(parent)
			return;
		}

		const page = routes[location.hash]
		page().then(Component => Component.default({navigate}).render(parent))
	}

	return {
		render
	}
}

export default App;