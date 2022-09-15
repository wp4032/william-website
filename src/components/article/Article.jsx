import React from 'react';
import './article.css'

const Article = ({ src, date, title, text }) => {
  return (
    <div className="william__blog-container_article">
      <div className="william__blog-container_header" />
      <div className="william__blog-container_article-image">
        <img src={src} alt="blog" />
      </div>
      <div className="william__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default Article