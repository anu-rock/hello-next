import Layout from '../components/layout';
import PostLink from '../components/post-link';

function getPosts() {
    return [
        { id: 'hello-nextjs', title: 'Hello Next.js' },
        { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
        { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
    ];
}

const Index = () => (
    <Layout>
        <h1>My Blog</h1>
        <ul>
            {getPosts().map(post => (
                <PostLink key={post.id} id={post.id} title={post.title} />
            ))}
        </ul>
    </Layout>
);

export default Index;