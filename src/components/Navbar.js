import React, { Component } from 'react';


export default class Navbar extends Component {
	render() {
		return (
			<div>
				<nav className='navbar navbar-dark bg-dark' role="navigation" aria-label="main navigation">
					<div className='navbar-brand' >
						<a className='navbar-item' href='/'>
							<img src={ process.env.PUBLIC_URL + "/badge_watch.jpg"} className='rounded float-left mr-3' width="100"  alt='badge watch logo' />
							<h5> BadgeWatch </h5>
							<h6 className='text-sm'>Making our communities aware</h6>
						</a>
					</div>

					<form className='form-inline '>
						<input
							className='form-control p-2 mr-2'
							type='search'
							placeholder='Search'
							aria-label='Search'
						/>
						<button className='btn btn-outline-success ' type='submit'>
							Search
						</button>
					</form>

					<div className="navbar-end">
						<div className='navbar-item'>
							<div className='buttons'>
								<a href='/register' className='btn btn-primary mr-2 ml-2'>
									<strong>Sign up</strong>
								</a>
								<a href='/login' className='btn btn-light btn-outline-primary'>
									Log in
								</a>
							</div>
						</div>
					</div>
				</nav>

			</div>
		);
	}
}
