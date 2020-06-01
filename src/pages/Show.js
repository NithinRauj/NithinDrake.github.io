import React from 'react';
import PostLoader from '../components/PostLoader';

const Show = () => {
  return (
    <div>
      <h2>Show Stories</h2>
      <PostLoader pathURL={'v0/showstories.json?'} totalPosts={100} />
    </div>
  );
};

export default Show;
