import Header from '../components/Header';
import withMui from '../shared/MUI/withMUI';

const Index = ({ title = 'Hello from next.js' }) => (
	<div>
		<Header />
		<h2>{title}</h2>
	</div>
);

export default withMui(Index);