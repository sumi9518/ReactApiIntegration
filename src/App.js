import React, { Component } from 'react';


class App extends Component {
constructor(props) {
  super(props);
  this.state= {
    isLoaded : false,
    posts: [],
  }
}
 
  componentDidMount(){

      fetch('https://gofooddy.com/wp-json/wp/v2/posts')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          posts: json,

        })
      });

  }

  render() {

    var { isLoaded, posts } = this.state;

    if(!isLoaded){
      return( <div>Please wait Data is Loading...</div>);
     }
     else {
      return (
        
        <div className="App">
          <ul>
            {posts.map(post => (
              <li key={post.id}>Slug: {post.slug} | Status: {post.status} | Title: {post.title.rendered}</li>
            ))}
          </ul>
        </div>
      );
       
     }
   
  }
}

export default App;
