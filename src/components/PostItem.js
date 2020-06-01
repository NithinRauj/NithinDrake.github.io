import React from 'react';

const PostItem = ({ post }) => {
  const { by, descendants, score, title, url, time, type } = post;
  const date = new Date(time * 1000);
  const utcString = date.toUTCString();
  const convertedDate = utcString.slice(-11, -4);

  return (
    <div className='post-item'>
      {url !== null && url !== '' ? (
        <a href={url} target='_blank' rel='noopener noreferrer'>
          <h3>{title}</h3>
        </a>
      ) : (
        <h3>{title}</h3>
      )}

      <div className='row'>
        <p>
          Score: <span className='black-text'>{score}</span> &nbsp; | &nbsp;
        </p>
        <p>
          Time: <span className='black-text'>{convertedDate}</span> &nbsp; |
          &nbsp;
        </p>
        <p>
          By: <span className='black-text'>{by}</span> &nbsp; | &nbsp;
        </p>
        {type !== 'job' && (
          <p>
            <span className='black-text'>{descendants} Comments</span>{' '}
          </p>
        )}
      </div>
    </div>
  );
};

export default PostItem;
