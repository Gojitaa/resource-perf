import PerfCure from 'perfcure';
import App from './components/App'
const root = document.querySelector('#root');

const main = () => {
	const perfCure = new PerfCure()
	perfCure.start('unminimized_basic', 'basic', entry => console.log(entry))
	perfCure.start('unminimized_resource', 'resource', entry => console.log(entry))
	App({ root }).render(root);
}

main()