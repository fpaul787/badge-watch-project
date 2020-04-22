import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import data from '../data/data.json'

export default function Post({ match }) {
   // inefficient but ok for now
   var posts = data.posts
   const post = posts.find((p) => p.postID === match.params.id)

   return (
      <div>
         <div>
            <Link to="/">
               <button type="button" className="btn btn-primary m-2">
                  Home
               </button>
            </Link>
         </div>

         <div
            className="card mx-auto mb-3"
            style={{ width: '40rem', height: 'auto' }}
         >
            <h5 className="card-title">{post.title}</h5>
            <img className="card-img-top" src={post.img} alt="Card cap" />
            <div className="card-body">
               <p className="card-text">{post.description}</p>
               <h3 className="card-subtitle mb-2 text-muted text-left">
                  <a class="badge badge-pill badge-info" href={post.link} target="_blank" rel="noopener noreferrer">
                     Click to open article
                  </a>
               </h3>
               <br/>
               <h6 className="card-subtitle mb-2 text-muted text-left">
                  Location:  <span className="font-weight-bold">{post.location}</span>
               </h6>
               <br />
               <h6 className="card-subtitle mb-2 text-muted text-left">
                  Department:{' '}
                  <span className="font-weight-bold">{post.department}</span>
               </h6>
               <br />
               

               <br />
               <br />
               <h6 className="card-subtitle mb-2 text-muted text-left">
                  Comments:{' '}
               </h6>
            </div>
         </div>
      </div>
   )
}
