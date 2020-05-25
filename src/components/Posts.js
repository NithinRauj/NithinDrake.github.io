import React from 'react';
import PostItem from './PostItem';

const Posts = ({ posts, loading }) => {
  if (loading || posts.length === 0) {
    return <h4 style={{ textAlign: 'center' }}>Loading News...</h4>;
  }

  return (
    <div>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
