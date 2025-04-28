import { useContext } from "react";
import AuthContext from "../../../Context/AuthContext/AuthContext";
import Swal from "sweetalert2";






const Google = () => {

   
    const { signWithGoogle } = useContext(AuthContext)


    const handleGoogleLoging = () => {
        signWithGoogle() 
   
    }

    return (

        <div className='p-7'>
            <div className="divider">or</div>
            <button onClick={handleGoogleLoging} className='btn btn-primary w-full  mt-4'>Google Login </button>
        </div>
    );
};

export default Google;