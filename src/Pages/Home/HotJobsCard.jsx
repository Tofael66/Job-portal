
import { FaBoxOpen } from "react-icons/fa";
import { HiMiniDocumentCurrencyDollar } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


const HotJobsCard = ({job}) => {

const {location , hr_name, hr_email ,_id, description , company_logo , category,  applicationDeadline , jobType, company , title ,  requirements , salaryRange} = job ; 
// console.log(_id)
// console.log(job)

    return (
        <div>
               <div className="card bg-blue-100/30 hover:bg-white hover:border hover:text-black hover:border-gray-300 shadow-sm ">

<div className="flex gap-2 m-2 items-center">
<figure>
  <img
  className="w-16"
    src={company_logo}
    alt="Shoes" />
</figure>
<div className="flex flex-col">
<h4 className="text-2xl font-semibold">{company}</h4>
<p className="flex gap-1 items-center "><IoLocationOutline /> {location}</p>
</div>
</div>


<div className="p-3">
  <h2 className="card-title">{title}</h2>
  <div className="badge gap-2 mt-1 mb-2 ">
      <p className="flex gap-1 items-center "> <FaBoxOpen />{jobType}</p>
      <p className="flex gap-1 items-center "> <IoTimeOutline />{applicationDeadline}</p>
  </div>
  <p className="mt-2 mb-2">{description}</p>
  {/* arrof object thakle */}
  <div className="flex gap-2 mt-4 flex-wrap">
      {
      requirements.map((skill , indx)=><p key={indx} className="border rounded-md hover:text-blue-400 text-center hover:font-bold hover:bg-amber-800 px-2"> {skill}</p>)
      } 
  </div>
  <div className=" mt-3 flex items-center  gap-2 ">
<p className="flex items-center" ><p className="text-sm">Salary:
    </p> <HiMiniDocumentCurrencyDollar /><span className="flex text-sm">{salaryRange.min}-<span>{salaryRange.max}</span></span>{salaryRange.currency}</p>

    <Link to={`/jobs/${_id}`}>
     <button className="btn hover:btn-primary ">Apply</button></Link>
  </div>
</div>
</div>
 
        </div>
    );
};

export default HotJobsCard;