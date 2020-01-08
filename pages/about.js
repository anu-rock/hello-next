import Layout from '../components/layout';
import withLayout from '../components/layoutHOC';

const About = () => (
    <p>This is the about page.</p>
);

export default withLayout(About);