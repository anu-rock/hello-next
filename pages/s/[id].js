import fetch from 'isomorphic-unfetch';
import Layout from '../../components/layout';

const API_URL = 'https://api.tvmaze.com/shows';

const Show = props => (
    <Layout>
        <h1>{props.show.name}</h1>
        <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
        {props.show.image ? <img src={props.show.image.medium} /> : null}
    </Layout>
);

Show.getInitialProps = async (context) => {
    const { id } = context.query;

    const res = await fetch(`${API_URL}/${id}`);
    const show = await res.json();

    console.log(`FETCH: Fetched show ${show.name}`);

    return { show };
};

export default Show;