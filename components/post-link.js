import Link from 'next/link';

const PostLink = props => (
    <>
        <li>
            <Link href="/p/[id]" as={`/p/${props.id}`}>
                <a>{props.title}</a>
            </Link>
        </li>

        <style jsx>{`
            a {
                font-family: 'Arial';
            }

            li {
                list-style: none;
                margin: 5px 0;
            }

            a {
                text-decoration: none;
                color: blue;
            }

            a:hover {
                opacity: 0.6;
            }
      `}</style>
    </>
);

export default PostLink;