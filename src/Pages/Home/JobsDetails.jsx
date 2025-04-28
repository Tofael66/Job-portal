import { Link, useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navber from "../Shared/Navber";




const JobsDetails = () => {
const job = useLoaderData()
const {company , category , description , _id, 
    company_logo ,
    title ,
    applicationDeadline , 

    
    } = job ;
console.log(job)

    return (

        <div>
            <h1 className="text-3xl">{ title}</h1>
         
           <p>Apply for: {company}</p>
           <p>DeadeLine {
applicationDeadline
}</p>

<Link to={`/JobApply/${_id}`}> 
<button className="btn btn-primary"> Apply Now</button></Link>
       
        </div>
    );
};

export default JobsDetails;