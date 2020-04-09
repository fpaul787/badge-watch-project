import React, { useState, Component } from 'react'

import Pagination from './Pagination'
import Posts from './Posts'

var posts = []
for (let i = 1; i < 13; i++) {
   posts.push(i)
}
export default function Home() {

   const [currentPage, setCurrentPage] = useState(1);
   const [postsPerPage] = useState(6);

   // Get current posts
   const indexOfLastPost = currentPage * postsPerPage
   const indexOfFirstPost = indexOfLastPost - postsPerPage
   const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

   
   // Change page, passing arrow function as prop.....very clever 
   const paginate = (pageNumber) => setCurrentPage(pageNumber)

   
   return (
      <div className="container-fluid  ">
         <Posts posts={currentPosts} loading={false} />

         <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
      </div>
   )
}
