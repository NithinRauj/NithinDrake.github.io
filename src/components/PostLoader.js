import React, { Component } from 'react';
import Posts from '../components/Posts';
import axios from 'axios';
import Pagination from '../components/Pagination';

class PostLoader extends Component {
  signal = axios.CancelToken.source();
  state = {
    posts: null,
    postsPerPage: 10,
    loading: false,
    currentPage: 1,
  };

  componentDidMount() {
    this.fetchPosts(0, 10);
  }

  componentWillUnmount() {
    this.signal.cancel('API requests are being cancelled');
  }

  fetchPosts = async (firstIndex, lastIndex) => {
    this.setState({ loading: true, posts: [] });
    const res = await axios
      .get('https://hacker-news.firebaseio.com/' + this.props.pathURL)
      .catch((error) => {
        console.log(error);
      });

    let ids = res.data.slice(firstIndex, lastIndex);
    ids.map(async (id) => {
      const res = await axios
        .get(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`,
          {
            cancelToken: this.signal.token,
          }
        )
        .then((res) => {
          this.setState({ posts: [...this.state.posts, res.data] });
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            console.log(error);
          }
        });
    });
    this.setState({ loading: false });
  };

  paginate = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
    const lastPostIndex = this.state.currentPage * this.state.postsPerPage;
    const firstPostIndex = lastPostIndex - this.state.postsPerPage;
    this.fetchPosts(firstPostIndex, lastPostIndex);
  };

  render() {
    return (
      <div className='posts-container'>
        <Posts posts={this.state.posts} loading={this.state.loading} />

        <Pagination
          totalPosts={this.props.totalPosts}
          postsPerPage={this.state.postsPerPage}
          paginate={this.paginate}
        />
      </div>
    );
  }
}

export default PostLoader;
