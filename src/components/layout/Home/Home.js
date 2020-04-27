import React, { useState, Component } from 'react'

import Pagination from '../../Pagination'
import Posts from '../../Posts'
import data from '../../../data/data.json'


export default function Home() {

   
   const [posts] = useState(data.posts)
   const [currentPage, setCurrentPage] = useState(1);
   const [postsPerPage] = useState(3);

   // Get current posts
   const indexOfLastPost = currentPage * postsPerPage
   const indexOfFirstPost = indexOfLastPost - postsPerPage
   const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

   
   // Change page, passing arrow function as prop.....very clever 
   const paginate = (pageNumber) => setCurrentPage(pageNumber)

   
   return (
      <div className="container-fluid ml-5">
         <Posts posts={currentPosts} loading={false} />

         <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
      </div>
   )
}
