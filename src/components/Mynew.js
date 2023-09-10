import React, { Component } from 'react'
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
export default class Mynew extends Component {
    static  defaultProps = {
        contry: 'in',
        pageSize: this.pageSize,
        category: 'general'
      }
      static  propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    
      }
      capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
      constructor(props){
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page:1,
            totalResults:0
        }
        document.title=`${this.props.category}`
    }
     
    async updateNews(){
      this.props.setProgress(20)
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
      this.setState({loading:true});
      let data = await fetch(url)
      let parseData = await data.json()
      this.props.setProgress(80)
      this.setState({
        articles: parseData.articles,
        totalResults: parseData.totalResults,
        loading:false
      })
      this.props.setProgress(100)

    }
    async componentDidMount(){
    
      this.updateNews()
    }
    handlePreviousClick = async ()=>{
  // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=cd0df4bd26e6467db3659d3f30c8b6dd&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
  // this.setState({loading:true})
  
  // let data = await fetch(url)
  // let parseData = await data.json()
  // console.log(parseData)
  //   this.setState({
  //     page:this.state.page - 1,
  //     articles: parseData.articles,
  //     loading:false
  //   })
  this.setState({page: this.state.page-1})
  this.updateNews()
}
handleNextClick = async () =>{
//   if(!(this.state.page+1 >Math.ceil(this.state.totalResults/this.props.pageSize))){
//   let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=cd0df4bd26e6467db3659d3f30c8b6dd&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
//   this.setState({loading:true})
//   let data = await fetch(url)
//   let parseData = await data.json()
//   console.log(parseData)
//     this.setState({
//       page:this.state.page + 1,
//       articles: parseData.articles,
//       loading:false
//     })
// }
          this.setState({page: this.state.page+1})
          this.updateNews()
}
    // fetchMoreData = async () =>{
    //   this.setState({page: this.state.page + 1})
    //   const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=cd0df4bd26e6467db3659d3f30c8b6dd&page=${this.state.page}&pageSize=${this.props.pageSize}`
    //   let data = await fetch(url);
    //   let parseData = await data.json()
    //   this.setState({
    //     articles: this.state.articles.concat(parseData.articles),
    //     totalResults: parseData.totalResults,
    //   })
    // }
    fetchMoreData = async ()=>{
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
      this.setState({page: this.state.page+1})
      this.setState({loading:true});
      let data = await fetch(url)
      let parseData = await data.json()
      this.props.setProgress(80)
      this.setState({
        articles: this.state.articles.concat(parseData.articles),
        totalResults: parseData.totalResults,
        loading:false
      })
    }
    
    
  render() {
    return (
        <>
        <h1 className="text-center" style={{margin: '70px 0px'}}>Daily News - Top Headlines of {this.capitalizeFirstLetter(this.props.category)}</h1>
        {this.state.loading && <Spinner/>}
        <div className="container">
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
        <div className="row">
          {this.state.articles.map((element)=>{
            return (
                <div className="col-md-4" key={element.url}>
                <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imagurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                </div>
        
            );
          })}
          </div>
          </div>
          </InfiniteScroll>
          </div>
        {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark " onClick={this.handlePreviousClick}>&larr; Previous</button>
          <button disabled={this.state.page+1 >Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark " onClick={this.handleNextClick}>Next &rarr;</button>
          </div> */}
   </>
    )
  }
}

// import React, { Component } from 'react'
// import Newsitem from './Newsitem'
// import Spinner from './Spinner';
// import PropTypes from 'prop-types'
// export class Mynew extends Component {
//   static  defaultProps = {
//     contry: 'in',
//     pageSize: this.pageSize,
//     category: 'general'
//   }
//   static  propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string

//   }
//   constructor(props){
//     super(props);
//     this.state = {
//         articles: [],
//         loading: false,
//         page:1
//     }
//     document.title=`${this.props.category}`
// }
// async updateNews(){
//   const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=cd0df4bd26e6467db3659d3f30c8b6dd&page=${this.state.page}&pageSize=${this.props.pageSize}`
//   this.setState({loading:true})
//   let data = await fetch(url)
//   let parseData = await data.json()
//   this.setState({
//     articles: parseData.articles,
//     totalResults: parseData.totalResults,
//     loading:false
//   })
// }
// async componentDidMount(){
//   let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=cd0df4bd26e6467db3659d3f30c8b6dd&page=1&pageSize=${this.props.pageSize}`
//   this.setState({loading:true})
  
//   let data = await fetch(url)
//   let parseData = await data.json()
//   console.log(parseData)
//   this.setState({
//     articles: parseData.articles,
//     totalResults: parseData.totalResults,
//     loading:false
//   })
//   this.updateNews()
// }
// handlePreviousClick = async ()=>{
//   let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=cd0df4bd26e6467db3659d3f30c8b6dd&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
//   this.setState({loading:true})
  
//   let data = await fetch(url)
//   let parseData = await data.json()
//   console.log(parseData)
//     this.setState({
//       page:this.state.page - 1,
//       articles: parseData.articles,
//       loading:false
//     })
//   this.setState({page: this.state.page-1})
//   this.updateNews()
// }
// handleNextClick = async () =>{
//   if(!(this.state.page+1 >Math.ceil(this.state.totalResults/this.props.pageSize))){
//   let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=cd0df4bd26e6467db3659d3f30c8b6dd&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
//   this.setState({loading:true})
//   let data = await fetch(url)
//   let parseData = await data.json()
//   console.log(parseData)
//     this.setState({
//       page:this.state.page + 1,
//       articles: parseData.articles,
//       loading:false
//     })
// }
//           this.setState({page: this.state.page+1})
//           this.updateNews()
// }

//   render() {
//     return (
      
//       <div className='container my-3'>
//         <h1 className="text-center" style={{margin: '20px 0px'}}>Daily News - Top Headlines of {this.props.category}</h1>
//         {this.state.loading && <Spinner/>}
//             <div className="row">
//             {this.state.articles.map((element) => {
//                             return (<div className="col-md-4" key={element.url}>
//                                 <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
//                             </div>);
//                         })}
//               {/* {this.state.articles.map((element)=>{
//                 return <div>
//           <Newsitem title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,44):""} imagurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/></div>})} */}
//         </div>
              
//           <div className="container d-flex justify-content-between">
//           <button disabled={this.state.page<=1} type="button" className="btn btn-dark " onClick={this.handlePreviousClick}>&larr; Previous</button>
//           <button disabled={this.state.page+1 >Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark " onClick={this.handleNextClick}>Next &rarr;</button>
//           </div>
//       </div>
//     )
//   }
// }

// export default Mynew




















// second



// import React, { Component } from 'react'
// import Newsitem from './Newsitem';
// import Spinner from './Spinner';
// import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";
// export default class Mynew extends Component {
//     static  defaultProps = {
//         contry: 'in',
//         pageSize: this.pageSize,
//         category: 'general'
//       }
//       static  propTypes = {
//         country: PropTypes.string,
//         pageSize: PropTypes.number,
//         category: PropTypes.string
    
//       }
//       capitalizeFirstLetter = (string) => {
//         return string.charAt(0).toUpperCase() + string.slice(1);
//     }
//       constructor(props){
//         super(props);
//         this.state = {
//             articles: [],
//             loading: true,
//             page:1,
//             totalResults:0
//         }
//         document.title=`${this.props.category}`
//     }
     
//     async updateNews(){
//       this.props.setProgress(20)
//       const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=36b5540a5312486c89399d84174ab33d&page=${this.state.page}&pageSize=${this.props.pageSize}`
//       this.setState({loading:true});
//       let data = await fetch(url)
//       let parseData = await data.json()
//       this.props.setProgress(80)
//       this.setState({
//         articles: parseData.articles,
//         totalResults: parseData.totalResults,
//         loading:false
//       })
//       this.props.setProgress(100)

//     }
//     async componentDidMount(){
    
//       this.updateNews()
//     }
//     handlePreviousClick = async ()=>{
//   // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=cd0df4bd26e6467db3659d3f30c8b6dd&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
//   // this.setState({loading:true})
  
//   // let data = await fetch(url)
//   // let parseData = await data.json()
//   // console.log(parseData)
//   //   this.setState({
//   //     page:this.state.page - 1,
//   //     articles: parseData.articles,
//   //     loading:false
//   //   })
//   this.setState({page: this.state.page-1})
//   this.updateNews()
// }
// handleNextClick = async () =>{
// //   if(!(this.state.page+1 >Math.ceil(this.state.totalResults/this.props.pageSize))){
// //   let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=cd0df4bd26e6467db3659d3f30c8b6dd&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
// //   this.setState({loading:true})
// //   let data = await fetch(url)
// //   let parseData = await data.json()
// //   console.log(parseData)
// //     this.setState({
// //       page:this.state.page + 1,
// //       articles: parseData.articles,
// //       loading:false
// //     })
// // }
//           this.setState({page: this.state.page+1})
//           this.updateNews()
// }
//     // fetchMoreData = async () =>{
//     //   this.setState({page: this.state.page + 1})
//     //   const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=cd0df4bd26e6467db3659d3f30c8b6dd&page=${this.state.page}&pageSize=${this.props.pageSize}`
//     //   let data = await fetch(url);
//     //   let parseData = await data.json()
//     //   this.setState({
//     //     articles: this.state.articles.concat(parseData.articles),
//     //     totalResults: parseData.totalResults,
//     //   })
//     // }
//     fetchMoreData = async ()=>{
//       this.setState({page: this.state.page+1})
//       const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=36b5540a5312486c89399d84174ab33d&page=${this.state.page}&pageSize=${this.props.pageSize}`
//       this.setState({loading:true});
//       let data = await fetch(url)
//       let parseData = await data.json()
//       this.props.setProgress(80)
//       this.setState({
//         articles: this.state.articles.concat(parseData.articles),
//         totalResults: parseData.totalResults,
//         loading:false
//       })
//     }
    
    
//   render() {
//     return (
//         <>
//         <h1 className="text-center" style={{margin: '20px 0px'}}>Daily News - Top Headlines of {this.capitalizeFirstLetter(this.props.category)}</h1>
//         {this.state.loading && <Spinner/>}
//         <div className="container">
//         <InfiniteScroll
//           dataLength={this.state.articles.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.articles.length !== this.state.totalResults}
//           loader={<Spinner/>}
//         >
//         <div className="container">
//         <div className="row">
//           {this.state.articles.map((element)=>{
//             return (
//                 <div className="col-md-4" key={element.url}>
//                 <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imagurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
//                 </div>
        
//             );
//           })}
//           </div>
//           </div>
//           </InfiniteScroll>
//           </div>
//         <div className="container d-flex justify-content-between">
//           <button disabled={this.state.page<=1} type="button" className="btn btn-dark " onClick={this.handlePreviousClick}>&larr; Previous</button>
//           <button disabled={this.state.page+1 >Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark " onClick={this.handleNextClick}>Next &rarr;</button>
//           </div>
//    </>
//     )
//   }
// }