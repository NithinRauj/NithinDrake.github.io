import React, { useState, useEffect } from 'react';
import Posts from '../components/Posts';
import axios from 'axios';
import Pagination from '../components/Pagination';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [postsPerPage, setPostsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  let ids = [];

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        'https://hacker-news.firebaseio.com/v0/topstories.json?'
      );
      ids = res.data.slice(0, 200);
      ids.map(async (id) => {
        const res = await axios
          .get(
            `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
          )
          .then((res) => setPosts((posts) => [...posts, res.data]));
      });
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = posts.slice(firstPostIndex, lastPostIndex);

  return (
    <div className='posts-container'>
      <Posts posts={currentPosts} loading={loading} />

      <Pagination
        totalPosts={200}
        postsPerPage={postsPerPage}
        paginate={paginate}
      />
    </div>
  );
};

export default Home;
