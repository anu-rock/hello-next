import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/layout';

const API_URL = 'https://api.tvmaze.com/search/shows?q=batman';

const Shows = props => (
    <Layout>
        <h1>Batman TV Shows</h1>
        <ul>
            {props.shows.map(show => (
                <li key={show.id}>
                    <Link href="/s/[id]" as={`/s/${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </Layout>
);

Shows.getInitialProps = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();

    console.log(`FETCH: ${data.length} shows fetched.`);

    return {
        shows: data.map(entry => entry.show)
    };
};

export default Shows;