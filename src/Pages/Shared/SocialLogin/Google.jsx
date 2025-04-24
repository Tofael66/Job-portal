import { useContext } from "react";
import AuthContext from "../../../Context/AuthContext/AuthContext";
import Swal from "sweetalert2";




const Google = () => {

    const { signWithGoogle } = useContext(AuthContext)


    const handleGoogleLoging = () => {
        signWithGoogle() 
        .then(result => {
            console.log(result.user) 
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "something you wrong",
                showConfirmButton: false,
                timer: 1500
              })
              .catch(error => { 
console.log(error)
Swal.fire({
    position: "top-end",
    icon: "error",
    title: "something you wrong",
    showConfirmButton: false,
    timer: 1500
  });
              })

        })
    }

    return (

        <div className='p-7'>
            <div className="divider">or</div>
            <button onClick={handleGoogleLoging} className='btn btn-primary w-full  mt-4'>Google Login </button>
        </div>
    );
};

export default Google;