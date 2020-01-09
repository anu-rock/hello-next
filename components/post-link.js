import Link from 'next/link';

const PostLink = props => (
    <li>
        <Link href="/p/[id]" as={`/p/${props.id}`}>
            <a>{props.title}</a>
        </Link>
    </li>
);

export default PostLink;