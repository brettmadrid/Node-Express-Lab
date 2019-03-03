import React, { Component } from "react";
import Axios from 'axios';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Cards from './Cards';
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    Axios.get("http://localhost:9090/api/posts")
      .then(response => this.setState({ posts: response.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Paper className="paper" elevation={1}>
          <Typography variant="h5" component="h3">
            This is a strip of paper telling you...
          </Typography>
          <Typography component="p">
            about a bunch of Tolkien quotes below!
          </Typography>
        </Paper>
        <Cards posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;
