import React, { Component } from 'react'

// Fallback image if imageUrl is not available
const defaultImage = "https://via.placeholder.com/150";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div>
        <div className="card my-2">

          <img src={!imageUrl ? defaultImage : imageUrl} className="card-img-top" alt={title ? title : "News"}
            style={{ objectFit: 'cover' }} />
          <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zindex: '1' }}>
            {source}
          </span>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author ? 'Unknown' : author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}
