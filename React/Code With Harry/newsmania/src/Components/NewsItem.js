import React, { Component } from 'react'

// Fallback image if imageUrl is not available
const defaultImage = "https://via.placeholder.com/150"; // Placeholder image

export default class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl} = this.props;
    return (
      <div>
        <div className="card my-2">
          <img src={!imageUrl?defaultImage:imageUrl} className="card-img-top" alt={title ? title : "News"} 
            style={{ height: '180px', objectFit: 'cover' }} />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a rel = "noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}
