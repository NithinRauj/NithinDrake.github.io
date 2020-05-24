import React from 'react';

const Post = ({ post }) => {
  const { by, descendants, score, title, url, time, type } = post;
  const date = new Date(time * 1000);
  const utcString = date.toUTCString();
  const convertedDate = utcString.slice(-11, -4);

  return (
    <div className='post-item'>
      <h4>{title}</h4>
      <div className='row'>
        <h4>Score: {score} &nbsp; | &nbsp;</h4>
        <h4>Time: {convertedDate} &nbsp; | &nbsp;</h4>
        <h4>By: {by} &nbsp; | &nbsp;</h4>
        <h4>{descendants} Comments</h4>
      </div>
    </div>
  );
};

export default Post;
