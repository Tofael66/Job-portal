import { useEffect, useState } from "react";
import HotJobsCard from "./HotJobsCard";




const HotJobs = () => {


    const [jobs , setJob ] = useState([]) ;

    useEffect(()  => {
 fetch(`http://localhost:5000/jobs`)
 .then(res => res.json())
 .then(data => {
    setJob(data)
 })
    } ,[])
console.log(jobs)
    return (

        <div>
       <div className="">
      {jobs.map(job => <HotJobsCard key={job._id} job={job}></HotJobsCard>)   
      }
       </div>
        </div>
    );
};

export default HotJobs;