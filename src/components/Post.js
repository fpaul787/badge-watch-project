import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default function Post({ match }) {
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
            className="card mx-auto"
            style={{ width: '40rem', height: '40rem' }}
         >
            <h5 className="card-title">Card title</h5>
            <img
               className="card-img-top"
               src={process.env.PUBLIC_URL + '/thumbnail.svg'}
               alt="Card cap"
            />
            <div className="card-body">
               <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
               </p>
               <h6 className="card-subtitle mb-2 text-muted text-left">
                  Location:{' '}
               </h6>
               <h6 className="card-subtitle mb-2 text-muted text-left">
                  Department:{' '}
               </h6>
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
