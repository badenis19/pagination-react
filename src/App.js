import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

// Component 
import Posts from './components/Posts';

function App() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false); // default value false 
  const [currentPage, setCurrentPage] = useState(1); // start at page one
  const [postsPerPage, setPostsPerPage] = useState(10);


  // useEffect works whenever the component mounts AND updates
  useEffect(() => {

    // Cannot use async direct in Use Effect so creating function that will
    const fetchPosts = async () => {
      setLoading(true); // change Loading to true
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts'); // get the post from API
      setPosts(res.data); // set Posts to old result of API req
      setLoading(false); // set back loading to false
    }

    fetchPosts();

  }, []); // need the empty array as 2nd argument so it only runs when it mounts and not loop

  // console.log(posts)

  // Get current posts




  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">My Blog</h1>
      < Posts posts={posts} loading={loading} />
    </div>
  );
}

export default App;
