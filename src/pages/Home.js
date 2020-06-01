import React, { Component } from 'react';
import PostLoader from '../components/PostLoader';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Top Stories</h2>
        <PostLoader pathURL={'v0/topstories.json?'} totalPosts={100} />;
      </div>
    );
  }
}

export default Home;
