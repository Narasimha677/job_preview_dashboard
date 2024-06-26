import React from 'react'
import CompanyDetails from "../CompanyDetails";
import JobDetails from "../JobDetails/JobDetails";
import JobDescription from '../JobDescription/JobDescription';
import './body.css';
const Body = () => {
  return (
    <div className='jobbody'>
        <JobDescription/>
        <JobDetails />
         
    </div>
  )
}

export default Body