import './App.css';
import React, { Component,   } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import News from './components/News';

export default class App extends Component {
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  apikey = process.env.REACT_APP_NEWS_API;
  render() {
    return(
      <>
         <Router>
         <NavBar/>
         <Routes>
         {/* <Route exact path="/"><News key="general" pageSize={5} country="in" category="general"/></Route> */}
         <Route exact path="/Business" element={<News setProgress={this.setProgress}apikey={this.apikey}key="Business"country="in" category="Business"/>}/>
        <Route exact path="/Entertainment" element={<News setProgress={this.setProgress}apikey={this.apikey}key="Entertainment"country="in" category="Entertainment"/>}/>
        <Route exact path="/general" element={<News setProgress={this.setProgress}apikey={this.apikey}key="general"country="in" category="general"/>}/>
        <Route exact path="/Health" element={<News setProgress={this.setProgress}apikey={this.apikey}key="Health"country="in" category="Health"/>}/>
        <Route exact path="/Science" element={<News setProgress={this.setProgress} key="Science"country="in" category="Science"/>}/>
        <Route exact path="/Sports" element={<News setProgress={this.setProgress}apikey={this.apikey}key="Sports"country="in" category="Sports"/>}/>
        <Route exact path="/" element={<News setProgress={this.setProgress}apikey={this.apikey}key="Technology"country="in" category="Technology"/>}/>
        </Routes>
         </Router>
         </>
    )

  
  }
}