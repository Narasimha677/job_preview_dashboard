import React from 'react';
import '../Navbar/navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className='logo'>Logo</div>
        <ul className='list'>
            <li className='jobs' ><img className='job-logo' src="https://cdn-icons-png.flaticon.com/512/903/903479.png"/><span className='list-text'>Jobs</span></li>
            <li className=''><img className='job-logo' src="https://cdn-icons-png.flaticon.com/512/903/903479.png"/><span className='list-text'>Jobs</span></li>
            <li className=''><img className='job-logo' src="https://cdn-icons-png.flaticon.com/512/903/903479.png"/><span className='list-text'>Jobs</span></li>
        </ul>
        <div className='text-2xl'>profile icon</div>
    </div>
  )
}

export default Navbar