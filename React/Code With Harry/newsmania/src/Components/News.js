import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import Proptypes from 'prop-types' 

export default class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'general',
  }

  static propTypes = {
    country: Proptypes.string,
    pageSize: Proptypes.number,
    category: Proptypes.string,
  }

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
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5ce858ca47a64a16bd27002456640447&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, 
      totalResults: parsedData.totalResults, 
      loading: false});
  }

  handlePreviousClick = async () => {
    // console.log('p');

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5ce858ca47a64a16bd27002456640447&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, 
      page: this.state.page - 1,
     loading: false});

  }

  handleNextClick = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
      // console.log('n');

      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5ce858ca47a64a16bd27002456640447&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({ articles: parsedData.articles, 
        page: this.state.page + 1,
        loading:false });
    }
  }

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{margin: '25px 0px'}}>NewsMania - Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (<div className="col-md-4" key={element.url}>
              <NewsItem title={element.title} description={element.description}
                imageUrl={element.urlToImage} newsUrl={element.url}
              /></div>)
          })
          }
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>

      </div>
    )
  }
}
