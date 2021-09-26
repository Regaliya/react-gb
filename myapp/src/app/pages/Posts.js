import React, { Component } from 'react';
import { addPost, getPosts } from '../actions/postActions';
import store from '../stores/postStore';
import PostsList from '../components/PostList';

export default class Posts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }

     //Реакт создай ссылку  к которой я могу обратиться
     this.myRefName = React.createRef();
     this.myRefComment = React.createRef();
     
    this.onPostChange = this.onPostChange.bind(this);
    this.newPost = this.newPost.bind(this);
  }
  
  newPost() {
    const title = this.myRefName.current.value;
    const userId = 1;
    const body = this.myRefComment.current.value;

    let newComment = {  title, userId, body};
    const posts = [newComment, ...this.state.posts ];
    console.log(posts);

    //очистка введенных полей 
    this.myRefName.current.value = '';
    this.myRefComment.current.value = '';

    //перерисовка
    this.setState({ posts: posts });
    console.log("newsetState");
  }

  onPostChange() {
    this.setState({ posts: store.posts });
  }

  componentDidMount() {
    getPosts();
    store.on('change', this.onPostChange);
  }

  componentWillUnmount() {
    store.removeListener('change', this.onPostChange);
  }

  render() {
    return (
      <div>
        <h1>Посты</h1>
        
        <label>
            <input ref={this.myRefName} type="text" placeholder="Ваше имя"></input>
            <br></br>
            <textarea ref={ this.myRefComment } rows="4" cols="100" placeholder="Комментарий"></textarea>
            <br></br>
            <button onClick={this.newPost} className="btn btn-primary">Добавить пост</button>
        </label>
        <PostsList posts={this.state.posts} />
      </div>
    )
  }
}