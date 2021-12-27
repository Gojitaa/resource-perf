import { app } from '../index.css'

const onLogin = async navigate => {
	navigate('#/movies')	
}

const Login = ({ navigate }) => {
	const template = () => `
		<main class='${app}'>
			<h1>Movie Finder</h1>
			<button id='login' type='button'>Click to see some movies</button>
		<main>
	`
	const render = parent => {
		parent.innerHTML = template();
		parent.querySelector('#login').addEventListener('click', () => onLogin(navigate))
	}

	return {
		render
	}
}

export default Login