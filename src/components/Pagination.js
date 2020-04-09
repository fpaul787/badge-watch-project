import React from 'react'

// special thanks to Traversy Media 
// for tutorial on Pagination
const Pagination = ({postsPerPage, totalPosts, paginate}) => {

    const PageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        PageNumbers.push(i);
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination pagination-lg justify-content-center">
            {PageNumbers.map(number => (
                <li key={number} className="page-item ml-2">
                    <button onClick={() => paginate(number)} className="page-link">
                        {number}
                    </button>
                </li>

            ))}
            </ul>
            
        </nav>
    )
}

export default Pagination
