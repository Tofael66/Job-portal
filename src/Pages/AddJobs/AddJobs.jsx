




const AddJobs = () => {


  const handleAddJobs = (e) => {
e.preventDefault() ;
const fromData = new FormData(e.target) ;
console.log(fromData.entries())
const initialData = Object.fromEntries(fromData.entries()) ;
console.log(initialData)
const {min , max , currency , ...newJob} = initialData ; 
console.log(newJob) 
newJob.salaryRanges = {min , max , currency} 
console.log(newJob)






  }



    return (
        <div>
    <div className="card bg-base-100 w-full text-2xl shadow-2xl">
      <form onSubmit={handleAddJobs} className="card-body ">
        <fieldset className="fieldset">
{/* job title */}
        <div className="form-control">
        <label className="label text-xl mb-3">Job Tile</label>
        <input type="text" name="title" className="input w-full" placeholder="Job Tile" />
        </div>

{/* job location */}
   <div className="form-control">
   <label className="label text-xl mb-3">
     <span className="label-text">Job Location </span> </label>
   <input type="text" name="location" className="input w-full" placeholder="Location" />
   </div>

          {/* job type */}
      <div className="form-control">
      <label className="label text-xl mb-3">Job Type</label>
          <select name="Job_type" defaultValue="Pick a font" className="select w-full select-ghost border border-white">
  <option disabled={true}>Select Job type</option>
  <option>Full Time</option>
  <option>Intern</option>
  <option>Part-time</option>
</select>
      </div>

       {/* job Category*/}
   <div className="form-control">
   <label className="label text-xl mb-3">Job Filed</label>
          <select name="Job_Filed" defaultValue="Pick a font" className="select w-full select-ghost border border-white">
  <option disabled={true}>Select Job filed</option>
  <option>Engineer</option>
  <option>Software</option>
  <option>Civil Engineer</option>
</select>
   </div>
       {/* salary rang */}
   <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
   <div className="form-control">
   <label className="label">
   <span className="label-text text-xl mb-3"> Salary Rang</span>
   </label>
   <input type="text" name="max" className="input w-full" placeholder="Max" required />
   </div>
       {/* min */}
   <div className="form-control">
  
   <input type="text" name="min" className="input w-full" placeholder="Min" required />
   </div>
{/* currency*/}
   <div className="form-control">
   
          <select name="currency" defaultValue="Pick a font" className="select w-full select-ghost border border-white">
  <option  disabled={true}> currency</option>
  <option>BDT</option>
  <option>USD</option>
  <option>URO</option>
  <option>INC</option>
</select>
   </div>
   </div>

   {/* job description */}
   <div className="form-control">
        <label className="label text-xl mb-3">Job Description</label>
     
        <textarea className="textarea  w-full"  name="description" placeholder=" Job description" required></textarea> 
        </div>


{/* Company name */}
<div className="form-control">
   <label className="label text-xl mb-3">
     <span className="label-text">Company Name</span> </label>
   <input type="text" name="company" className="input w-full" placeholder="Company Name" />
   </div>




{/* HR  name */}
<div className="form-control">
   <label className="label text-xl mb-3">
     <span className="label-text">HR Name</span> </label>
   <input type="text" name="hr Name" className="input w-full" placeholder="Hr Name" />
   </div>

      {/* job requirement */}
      <div className="form-control">
        <label className="label text-xl mb-3">Job Requirement</label>
        <textarea className="textarea textarea-bordered w-full"  name="requirement" placeholder=" Each requirement in a new line " required></textarea> 
        </div>

  {/* job responsibilities */}
  <div className="form-control">
        <label className="label text-xl mb-3">job responsibilities</label>
        <textarea className="textarea textarea-bordered w-full"  name="responsibilities" placeholder="write Each responsibilities in a new line " required></textarea> 
        </div>
   {/* HR Email */}
<div className="form-control">
   <label className="label text-xl mb-3">
     <span className="label-text">HR Email </span> </label>
   <input type="text" name="hr_email" className="input w-full" placeholder="Hr email" />
   </div>
      {/* Company Url */}
<div className="form-control">
   <label className="label text-xl mb-3">
     <span className="label-text">Company Logo Url </span> </label>
   <input type="url" name="company_logo" className="input w-full" placeholder="Company Url Logo" />
   </div>
{/* status
<div className="form-control">
   <label className="label text-xl mb-3">
     <span className="label-text">Status</span> </label>
   <input type="text" name="status" className="input w-full" placeholder="status" />
   </div> */}

            {/* job Submit btn */}
     <div className="form-control  mt-6">
     <button className="btn btn-primary w-full ">Submit</button>
     </div>
        </fieldset>
      </form>
    </div>
  </div>

    );
};

export default AddJobs;