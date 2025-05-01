import { useEffect, useState } from "react";
import useAuthh from "../../Layouts/Hooks/useAuthh";
import { Link } from "react-router-dom";




const MypostedJObs = () => {

    const [jobs ,setJobs ] = useState([]) ;

    const {user} = useAuthh() ;


useEffect( () => {
    fetch(`http://localhost:5000/jobs?email=${user?.email}`)
    .then(res => res.json())
    .then(data => {
        setJobs(data)
         console.log(data)
    } )
}, [user?.email])

    return (

        <div>
<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Job title</th>
        <th>Job DeadLine</th>
        <th>Application Count</th>
        <th>View Application </th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
   {
    jobs.map((job , index ) =>  <tr key={index}>
    <th>{index + 1}</th>
    <td>{job.title}</td>
    <td>{job.applicationDeadline}</td>
    <td>{job.applicationCount}</td>
    <td>
        <Link to={`/viewApplications/${job._id}`}>
        <button className="btn btn-link">View Application</button>
        </Link>
        </td>
  </tr>)
   }
    
 
    </tbody>
  </table>
</div>   
        </div>
    );
};

export default MypostedJObs;