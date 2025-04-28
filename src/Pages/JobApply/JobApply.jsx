import { useNavigate, useParams } from "react-router-dom";
import useAuthh from "../../Layouts/Hooks/useAuthh";
import Swal from "sweetalert2";



const JobApply = () => {
    const {id } = useParams() ;
    const {user} = useAuthh() ;
    const navigate = useNavigate() ;
   //  console.log(id , user)

    const handleJobApply = (e) => {
e.preventDefault() ;
const form = e.target ; 
const linkedin = form.linkedin.value ;
const github = form.github.value ;
const Rejemi = form.Rejemi.value ;

// console.log(linkedin)
// console.log(github)
// console.log(Rejemi)


const jobApplicationData = {
  job_id: id ,
  application_email: user?.email ,
  linkedin,
  github,
  Rejemi
  
}

fetch('http://localhost:5000/job-application' , {
  method:'POST' , 
  headers: {
    'content-type' : 'application/json'
  } , 
  body: JSON.stringify(jobApplicationData)

} ) 
.then(res => res.json()) 
.then(data => {
  console.log(data)
  if(data.insertedId){
     Swal.fire({
        position: "top-end",
        icon: "success",
        title: "SignUp Success full",
        showConfirmButton: false,
        timer: 1500
      });
  }
  navigate("/myApplication")
})


    }

    return (
     


  
    <div className="card bg-base-100 w-full shadow-2xl">
<h1 className="text-5xl font-bold text-center">apply Job And Good Luck </h1>
   <form onSubmit={handleJobApply} className="card-body">
   <div  className="form-control " >
        <fieldset className="fieldset text-2xl">
          <label className="label">LinkedIn Ur</label>
          <input type="url" className="input w-full" name="linkedin" placeholder="LinkedIn Url" />
          <label className="label">GitHub url</label>
          <input type="url" className="input w-full" name="github" placeholder="github url" />

          <label className="label ">Rezemi Url</label>
          <input type="url" className="input w-full" name="Rejemi" placeholder="Rezime " />
         
        <div className="">
        <button className="btn w-full btn-primary mt-4">Apply</button>
        </div>
        </fieldset>
      </div>
   </form>
    </div>


       
    );
};

export default JobApply;