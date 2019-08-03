import React, { Component } from "react";
import styles from "./NewsFeed.module.css";
import News from "./component/News";
class NewsFeed extends Component {
  state = {
    todos: []
  };
  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/everything?q=bitcoin&from=2019-07-03&sortBy=publishedAt&apiKey=2bc27b730da541a3ae72aafa21b3f1fe"
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ todos: data });
      })
      .catch("error");
  }
  render() {
    return (
      <div className={styles.base}>
        {this.state.todos &&
          this.state.todos.articles &&
          this.state.todos.articles.map(todo => (
              <News
                image={todo.urlToImage}
                title={todo.title}
                desc={todo.content}
                author={todo.author}
              />         
          ))}
          
      </div>
    );
  }
}
export default NewsFeed;
