import React, { Component } from "react";
import styles from "./News.module.css";
import Image from "./NewsImage";
export default class News extends Component {
  render() {
    return (
      <div className={styles.base}>
        <div className={styles.imageHolder}>
            <Image
              src={this.props.image}
            size="cover"
            />
        </div>
        <div className={styles.newsDesc}>
          <div className={styles.title}>{this.props.title}</div>
          <div className={styles.content}>{this.props.desc}</div>
          <div className={styles.author}>{this.props.author}</div>
        </div>
      </div>
    );
  }
}
