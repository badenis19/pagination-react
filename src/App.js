import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

// Component 
import Posts from './components/Posts';
import Pagination from './components/Pagination';

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

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage; // to test
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">My Blog</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
    </div>
  );
}

export default App;
