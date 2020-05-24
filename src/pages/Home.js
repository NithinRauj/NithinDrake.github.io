import React, { Component } from 'react';
import Post from '../components/Post';

class Home extends Component {
  state = {
    posts: [],
  };
  async componentDidMount() {
    const res = await fetch(
      'https://hacker-news.firebaseio.com/v0/topstories.json?'
    );
    let ids = await res.json();
    ids = ids.slice(0, 20);
    ids.map(async (id) => {
      const res = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
      );
      const data = await res.json();
      this.setState({ posts: [...this.state.posts, data] });
    });
  }
  render() {
    return (
      <div className='posts-container'>
        {this.state.posts &&
          this.state.posts.map((post) => <Post key={post.id} post={post} />)}
      </div>
    );
  }
}

export default Home;
