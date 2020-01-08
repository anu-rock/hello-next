import Layout from '../components/layout';
import PostLink from '../components/post-link';

const Index = () => (
    <Layout>
        <h1>My Blog</h1>
        <ul>
            <PostLink id="hello-nextjs" />
            <PostLink id="learn-nextjs" />
            <PostLink id="deploy-nextjs" />
        </ul>
    </Layout>
);

export default Index;