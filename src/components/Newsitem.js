import React, { Component } from 'react';

export class Newsitem extends Component {
  render() {
    
    
    
      let {title, description, imageUrl, newsUrl, author, date  } = this.props;
    return <div>
      <div className="my-5"> 
                <div className="card" style={{width: "18rem"}}>
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}<span className="badge bg-secondary">New</span></h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-muted">By{!author?"Unknown":author} on {date}</small></p>
                <a href={newsUrl}  target="blank" className="btn btn-primary" role="button">read more</a>
            </div>
        </div>
      </div>
    </div>;
  }
}

export default Newsitem;
