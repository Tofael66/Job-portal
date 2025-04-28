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

<div className="text-center space-y-4 mt-16 mb-10">
    <h1 className="text-6xl ">Jobs of the day</h1>
    <p className="text-xl text-[#9e7ef5]"> Find the job that’s perfect for you. about 800+ new jobs everyday</p>
</div>

       <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8 mt-24 mb-20 ">
      {jobs.map(job => <HotJobsCard key={job._id} job={job}></HotJobsCard>)   
      }
       </div>
        </div>
    );
};

export default HotJobs;