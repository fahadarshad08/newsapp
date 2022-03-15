import React, { Component } from 'react';
import Newsitem from './Newsitem';
import Spinners from './Spinners';
import PropTypes from 'prop-types'

export class news extends Component {
  static defaultProps ={
    country:'in', 
    pageSize:8,
    category: 'Business'
  }
  static PropsTypes ={
    country: PropTypes.string,
    pageSize: PropTypes,
    category: PropTypes.string
  }

  constructor(){
    super();
    this.state ={
      articles: [],
      loading:true,
      page: 1
    }
  }
  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=ad4697cbbcb544ec8c64b8f21dbb0003&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles,
    totalResults: parsedData.totalResults,
    loading:false })
  }
   handlePrevClick = async()=>{
    console.log("previous")
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=ad4697cbbcb544ec8c64b8f21dbb0003&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    })
  }
   handleNextClick = async()=>{
    console.log("Next");
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize ))){  
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=ad4697cbbcb544ec8c64b8f21dbb0003&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false
    })
  }
    }

  render() {
    return (
    <div className="container my-3">
      <h2 className="text-center mt-5" >Fahad News - Top Headlines</h2>
       {this.state.loading && <Spinners/>}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url} >
          <Newsitem  title={element.title?element.title.slice(0,30):"" } description={element.description?element.description.slice(0,50):"" } imageUrl={element.urlToImage} newsUrl={element.newsUrl} author={element.author} date={element.publishedAt} />
          </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>Previous</button>
        <button disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize ))} type="button" className="btn btn-dark" onClick={this.handleNextClick}>next</button>

        </div>
    </div>
    )
  }
}

export default news;

