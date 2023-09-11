import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Mynew from './components/Mynew';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API
  state = {
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    let cardnumber = 9;
    return (
      <div>
        <Router>
        
        <Navbar></Navbar>
        <LoadingBar
        color='white'
        progress={this.state.progress}
        />
        <Routes>
          <Route path="/React-My-News/" element={<Mynew setProgress={this.setProgress} apiKey={this.apiKey}   key="general" pageSize={cardnumber} country="in" category="General"/>}></Route>
          <Route path="/Business" element={<Mynew setProgress={this.setProgress} apiKey={this.apiKey}  key="Business" pageSize={cardnumber} country="in" category="Business"/>}></Route>
          <Route path="/Entertainment" element={<Mynew setProgress={this.setProgress} apiKey={this.apiKey}  key="Entertainment" pageSize={cardnumber} country="in" category="Entertainment"/>}></Route>
          <Route path="/General" element={<Mynew setProgress={this.setProgress} apiKey={this.apiKey}  key="general" pageSize={cardnumber} country="in" category="General"/>}></Route>
          <Route path="/Health" element={<Mynew setProgress={this.setProgress} apiKey={this.apiKey}  key="Health" pageSize={cardnumber} country="in" category="Health"/>}></Route>
          <Route path="/Science" element={<Mynew setProgress={this.setProgress} apiKey={this.apiKey}  key="Science" pageSize={cardnumber} country="in" category="Science"/>}></Route>
          <Route path="/Sport" element={<Mynew setProgress={this.setProgress} apiKey={this.apiKey}  key="Sport" pageSize={cardnumber} country="in" category="sport"/>}></Route>
          <Route path="/Technology" element={<Mynew setProgress={this.setProgress} apiKey={this.apiKey}  key="Technology" pageSize={cardnumber} country="in" category="Technology"/>}></Route>
        </Routes>
        </Router>
      </div>
    )
  }
}


// 36b5540a5312486c89399d84174ab33d
// news api key 36b5540a5312486c89399d84174ab33d
// cd0df4bd26e6467db3659d3f30c8b6dd







// import './App.css';
// import React, { Component } from 'react'
// import Navbar from './components/Navbar';
// import Mynew from './components/Mynew';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'
// export default class App extends Component {
//   state = {
//     progress:0
//   }
//   setProgress=(progress)=>{
//     this.setState({progress:progress})
//   }
//   render() {
//     let cardnumber = 9;
//     return (
//       <div>
//         <Router>
        
//         <Navbar></Navbar>
//         <LoadingBar
//         color='#f11946'
//         progress={this.state.progress}
//         />
//         <Routes>
//           <Route path="/" element={<Mynew setProgress={this.setProgress} apiKey={this.apiKey}  key="general" pageSize={cardnumber} country="in" category="General"/>}></Route>
//           <Route path="/Business" element={<Mynew setProgress={this.setProgress} apiKey={this.apiKey}  key="Business" pageSize={cardnumber} country="in" category="Business"/>}></Route>
//           <Route path="/Entertainment" element={<Mynew setProgress={this.setProgress} apiKey={this.apiKey}  key="Entertainment" pageSize={cardnumber} country="in" category="Entertainment"/>}></Route>
//           <Route path="/General" element={<Mynew setProgress={this.setProgress} apiKey={this.apiKey}  key="general" pageSize={cardnumber} country="in" category="General"/>}></Route>
//           <Route path="/Health" element={<Mynew setProgress={this.setProgress} apiKey={this.apiKey}  key="Health" pageSize={cardnumber} country="in" category="Health"/>}></Route>
//           <Route path="/Science" element={<Mynew setProgress={this.setProgress} apiKey={this.apiKey}  key="Science" pageSize={cardnumber} country="in" category="Science"/>}></Route>
//           <Route path="/Sport" element={<Mynew setProgress={this.setProgress} apiKey={this.apiKey}  key="Sport" pageSize={cardnumber} country="in" category="sport"/>}></Route>
//           <Route path="/Technology" element={<Mynew setProgress={this.setProgress} apiKey={this.apiKey}  key="Technology" pageSize={cardnumber} country="in" category="Technology"/>}></Route>
//         </Routes>
//         </Router>
//       </div>
//     )
//   }
// }



// // news api key 36b5540a5312486c89399d84174ab33d
// // cd0df4bd26e6467db3659d3f30c8b6dd

