import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import Proptypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

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

  constructor(props) {
    super(props);
    console.log('I am constuctor');
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)}- by NewsMania`;
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5ce858ca47a64a16bd27002456640447&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  handlePreviousClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();

  }

  handleNextClick = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
      this.setState({ page: this.state.page + 1 })
      this.updateNews();
    }
  }

  fetchMoreData = async () => {

    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5ce858ca47a64a16bd27002456640447&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false
    });

  }

  render() {
    return (
      <>

        <h1 className="text-center" style={{ margin: '25px 0px', marginTop: '90px' }}>NewsMania - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        {this.state.loading && <Spinner />}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={this.state.articles.length < this.state.totalResults && <Spinner />}>

          <div className="container">

            <div className="row">
              {this.state.articles.map((element) => {
                return (<div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title} description={element.description}
                    imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}
                    source={element.source.name} /></div>)
              })
              }
            </div>

          </div>

        </InfiniteScroll>

        {/* use of next and previous button */}
        
        {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}


      </>
    )
  }
}
