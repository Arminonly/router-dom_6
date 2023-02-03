import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);
  return (
    <div>
      <h2>Our News</h2>

      {posts.map(post =>
        <Link key={post.id} to={`/posts/${post.id}`}>
          <li>
            {post.title}
          </li>
        </Link>
      )}
    </div>
  );
}
