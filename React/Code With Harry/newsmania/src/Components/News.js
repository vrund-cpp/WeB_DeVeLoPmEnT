import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

  constructor() {
    super();
    console.log('I am constuctor');
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5ce858ca47a64a16bd27002456640447&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
  }

  handlePreviousClick = async () => {
    // console.log('p');

    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5ce858ca47a64a16bd27002456640447&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, page: this.state.page - 1 });

  }

  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {

    }
    else {
      // console.log('n');

      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5ce858ca47a64a16bd27002456640447&page=${this.state.page + 1}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({ articles: parsedData.articles, page: this.state.page + 1 });
    }
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsMania - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (<div className="col-md-4" key={element.url}>
              <NewsItem title={element.title} description={element.description}
                imageUrl={element.urlToImage} newsUrl={element.url}
              /></div>)
          })
          }
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>

      </div>
    )
  }
}
