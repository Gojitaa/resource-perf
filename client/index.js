import PerfCure from 'perfcure';
import App from './components/App'
const root = document.querySelector('#root');

const perfCure = new PerfCure()


const initLoginTracking = () => {
	perfCure.start('Login', 'feature', entry => console.log(entry)) 
}

const main = () => {
	
	// perfCure.start('unminimized_basic', 'basic', entry => console.log(entry))
	// perfCure.start('unminimized_resource', 'resource', entry => console.log(entry))
	App({ root, initLoginTracking }).render(root);
}

main()