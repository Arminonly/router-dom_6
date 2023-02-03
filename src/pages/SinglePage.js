import React,{useState, useEffect} from 'react';
import { useParams, useNavigate,Link } from 'react-router-dom';

export default function SinglePage() {
  const navigate = useNavigate()
const {id} = useParams()
const [post, setPost] = useState(null)
useEffect(() => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then(response => response.json())
  .then(data => setPost(data))
 
}, [id]);

const goBack = ()=>{
navigate(-1)
}
  return (
    <div>
      <button onClick={goBack}>go back</button>
      <h2>SinglePage</h2>
      {
        post && (
          <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Link key={id} to={`/posts/${id}/edit`} >Edit this post</Link>
          </>
        )
      }
    </div>
  );
}
