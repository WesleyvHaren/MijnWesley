import Layout from '../../components/Layout';
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';

const Post = props => {
    const router = useRouter();

    return (
    <Layout>
        <h1>{router.query.id}</h1>
        <p>This is the blog post content.</p>
        { props.show ?
        <>
        <h1>{props.show.name}</h1>
        <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
        <img src={props.show.image.medium} />
        </> : <span></span>
        }
    </Layout>
    );
}

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  if(id > 0){
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();  
    return { show };
  }

  return {};
};

export default Post;