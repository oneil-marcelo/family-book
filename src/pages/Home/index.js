import React, { Component, Fragment } from "react";

import Header from "../../components/Header";
import Post from "../../components/Post";

import data from "../../services/mockService";

class Home extends Component {
  state = {
    posts: data
  };

  render() {
    const { posts } = this.state;

    return (
      <Fragment>
        <Header />
        <ul>
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </ul>
      </Fragment>
    );
  }
}

export default Home;
