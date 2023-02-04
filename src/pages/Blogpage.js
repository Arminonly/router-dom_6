import React, { useState, useEffect } from 'react';
import { Link,useLocation } from 'react-router-dom';

export default function BlogPage() {
  
  const [posts, setPosts] = useState([]);

  console.log(useLocation)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div>
      <h2>Our News</h2>
      <Link to="/posts/new">Add new post</Link>
      {
        posts.map(post =>
          <div style={{ color: 'black' }}>
            <Link key={post.id} to={`/posts/${post.id}`}>
              <li>
                {post.title}
              </li>
            </Link>
          </div>
        ).slice
      }
    </div>
  );
}
