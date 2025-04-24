import Lottie from "lottie-react";
import registerLotti from '../../assets/Lotti/Animation - 1745243791040.json'
import Swal from "sweetalert2";


import { useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import Google from "../Shared/SocialLogin/Google";






const SignIn = () => {

const {signIn} = useContext(AuthContext) ;

      const  handleSingIn = e => {
        e.preventDefault() ;
        const from = e.target ;
   
        const email= from.email.value ;
        const password= from.password.value ;
        console.table(email, password)
        
      
      // password validation koris 
      // show error m,essage 
      signIn(email, password)
    .then((result) => {
      // Signed up 
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "SignIn Success full",
        showConfirmButton: false,
        timer: 1500
      });
      console.log(result) ;
    
     
    })
    .catch((error) => {
      console.log(error)
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "something you wrong",
        showConfirmButton: false,
        timer: 1500
      });
    
      // ..
    })
      }
    





    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-96 p-8">
          
       <Lottie animationData={registerLotti}> </Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl  pl-4 font-bold">Sign In now</h1>
            <form onSubmit={handleSingIn} className="card-body">
              <fieldset className="fieldset">

             
                <label className="label">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input type="password" name='password' className="input" placeholder="Password" />
                <div><a className="link link-hover">Forgot password?</a></div>
                <button className="btn btn-primary mt-4">signIN</button>
              </fieldset>
            </form>
            <Google></Google>
          </div>
        </div>
      </div>
    );
};

export default SignIn;