import { Component } from 'react';
import Searchbar from './searchbar/Searchbar';
import ImageGallery from './imageGallery/ImageGallery';
import { searchPosts } from '../shared/services/posts';
import Button from '../components/Button/Button';
import Loader from './Loader/Loader'
import Modal from './Modal/Modal';
class App extends Component {
  state = {
    posts: [],
    loading: false,
    error: null,
    search: '',
    page: 1,
    modalOpen: false,
    modalContent: ''
  };
  
  

  componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    if (search !== prevState.search || page !== prevState.page) {
      this.setState({
        loading: true,
      });
      this.fetchPosts();
    }
  }

  onSubmit = e => {
    
    this.setState({
      posts:[],
      search: e.query,
    });
  };
  loadMore = () => {
    this.setState(({ page }) => {
      return {
        page: page + 1,
      };
    });
  };

  async fetchPosts() {
    const { search, page } = this.state;
    try {
      const data = await searchPosts(page, search);
      this.setState(prevState => {
        return {
          posts: [...prevState.posts, ...data.hits],
          loading: false,
          error: null,
        };
      });
    } catch (error) {
      this.setState({
        error: error.message,
        loading: false,
      });
    }
  }
  showModal = (post)=> {
    this.setState({
      modalContent: post,
        modalOpen: true,
    })
}
 modalClose =()=>{
   this.setState({
     modalContent:null,
     modalOpen:false,
   })
 }
  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery images={this.state.posts} handleClick={this.showModal} />
        {this.state.loading && <Loader />}
        {Boolean(this.state.posts.length) &&<Button onclick={this.loadMore} />}
        {this.state.modalOpen && <Modal image={this.state.modalContent} handleClose={this.modalClose} />}
      </div>
    );
  }
}

export default App;
