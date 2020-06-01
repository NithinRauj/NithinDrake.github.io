import React, { Component } from 'react';
import Posts from '../components/Posts';
import axios from 'axios';
import Pagination from '../components/Pagination';

// const Home = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [postsPerPage, setPostsPerPage] = useState(10);
//   const [currentPage, setCurrentPage] = useState(1);

//   axiosCancel(axios, { debug: false });

//   useEffect(() => {
//     fetchPosts(0, 10);
//   }, []);
//   let requestId1 = 'ids_request';
//   let requestId2 = 'items_request';

//   const fetchPosts = async (firstIndex, lastIndex) => {
//     setLoading(true);
//     setPosts([]);
//     const res = await axios
//       .get('https://hacker-news.firebaseio.com/v0/topstories.json?')
//       .catch((error) => {
//         console.log(error);
//       });
//     // axios.Cancel(requestId1);

//     let ids = res.data.slice(firstIndex, lastIndex);
//     console.log(ids);
//     ids.map(async (id) => {
//       let requestId = requestId2 + id.toString();
//       const res = await axios
//         .get(
//           `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`,
//           {
//             requestId: requestId,
//           }
//         )
//         .then((res) => setPosts((posts) => [...posts, res.data]))
//         .catch((error) => {
//           console.log(requestId + ' ' + error);
//         });
//       axios.Cancel(requestId);
//     });

//     setLoading(false);
//     // axios.cancelAll();
//   };

//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//     const lastPostIndex = pageNumber * postsPerPage;
//     const firstPostIndex = lastPostIndex - postsPerPage;
//     console.log(firstPostIndex, lastPostIndex);
//     fetchPosts(firstPostIndex, lastPostIndex);
//   };

//   // const currentPosts = posts

//   return (
//     <div className='posts-container'>
//       <Posts posts={posts} loading={loading} />

//       <Pagination
//         totalPosts={100}
//         postsPerPage={postsPerPage}
//         paginate={paginate}
//       />
//     </div>
//   );
// };

class Home extends Component {
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
      .get('https://hacker-news.firebaseio.com/v0/topstories.json?')
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
    const lastPostIndex = pageNumber * this.state.postsPerPage;
    const firstPostIndex = lastPostIndex - this.state.postsPerPage;
    this.fetchPosts(firstPostIndex, lastPostIndex);
  };

  render() {
    return (
      <div className='posts-container'>
        <Posts posts={this.state.posts} loading={this.state.loading} />

        <Pagination
          totalPosts={100}
          postsPerPage={this.state.postsPerPage}
          paginate={this.paginate}
        />
      </div>
    );
  }
}

export default Home;
