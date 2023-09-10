import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title,description,imagurl,newsurl,author,date,source} = this.props;
    return (
      <div className='my-3'>
        <div className="card">
          
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'50%',zIndex:1}}>{source}  </span>
            <img src={imagurl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-body-secondary">Last updated by {!author?"Someone": author} on {new Date(date).toGMTString()}</small></p>
                <a rel="noreferrer" href={newsurl} target='_blank' className="btn btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default Newsitem












// import React, { Component } from 'react'

// export class Newsitem extends Component {
//   render() {
//     let {title,description,imagurl,newsurl,author,date,source} = this.props;
//     return (
//       <div className='my-3'>
//         <div className="card">
          
//         <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'50%',zIndex:1}}>{source}  </span>
//             <img src={imagurl} className="card-img-top" alt="..."/>
//             <div className="card-body">
//                 <h5 className="card-title">{title}</h5>
//                 <p className="card-text">{description}...</p>
//                 <p className="card-text"><small className="text-body-secondary">Last updated by {!author?"Someone": author} on {new Date(date).toGMTString()}</small></p>
//                 <a rel="noreferrer" href={newsurl} target='_blank' className="btn btn-dark">Read More</a>
//             </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default Newsitem
