import React from 'react'
import { Link } from 'react-router-dom'

const Posts = ({posts, loading}) => {

    if(loading){
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <div className="row ml-5">
                {posts.map(post =>(
                    <div key={post} className="col-rm-6 ml-3 ">
                  <Link
                     to={`/post/${post}`}
                     style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                     <div
                        className="card ml-3 mr-3 mb-3 mt-3 "
                        style={{ width: '25rem', height: '25rem' }}
                     >
                        <div className="card-body">
                           <h5 className="text-left">Card title: {post}</h5>
                           <img
                              className="card-img-top mb-2"
                              src={process.env.PUBLIC_URL + "/thumbnail.svg"}
                              height="auto"
                              alt="Card"
                           />

                           <div className="border border-dark mb-2">
                              <p className="card-text">Description</p>
                           </div>

                           <h6 className="card-subtitle mb-2 text-muted text-left">
                              Location:{' '}
                           </h6>
                           <h6 className="card-subtitle mb-2 text-muted text-left">
                              Department:{' '}
                           </h6>
                           <p className="font-italic"> 10 Comments</p>
                        </div>
                     </div>
                  </Link>
               </div>
                ))}
            </div>
        </div>
    )
}

export default Posts;
