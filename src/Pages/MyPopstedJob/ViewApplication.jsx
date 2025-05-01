import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";




const ViewApplication = () => {

    const applications = useLoaderData() ;
    // console.log(applications)

    const handleStausUpdatedd = (e , id) => {
       // console.log(e.target.value , id)
        const data = {
            status: e.target.value ,
        }
        fetch(`http://localhost:5000/job-application/${id}` , {
          method: 'PATCH' ,
          headers: {
            'content-type': 'application/json'
          } , 
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "staus hasbeen updated",
                showConfirmButton: false,
                timer: 1500
              });
            }
    })
  };
  
    return (

        <div >
            <h2 className=" text-3xl"> Application for this job</h2>
     
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Status</th>
        <th>Updated status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        applications.map((appli , index)  =>  <tr key={appli._id}>
            <th> {index + 1}</th>
            <td>{appli.application_email}</td>
            <td>{appli.status}</td>

            <td>
    <select onChange={(e)=> handleStausUpdatedd(e,appli._id) } defaultValue={appli.status || 'change Status'} className="select select-xs">
  <option disabled={true}>Change Status</option>
  <option>Under Review </option>
  <option>set Interval</option>
  <option>Hired</option>
  <option>Rejected</option>
</select></td>
          </tr>)
     }
   
    </tbody>
  </table>
</div>
        </div>
    );

}

export default ViewApplication;