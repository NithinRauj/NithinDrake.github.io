import React, { Component } from 'react';
import PostLoader from '../components/PostLoader';

class Job extends Component {
  render() {
    return (
      <div>
        <h2>Job Stories</h2>
        <PostLoader pathURL={'v0/jobstories.json?'} totalPosts={60} />
      </div>
    );
  }
}

export default Job;
