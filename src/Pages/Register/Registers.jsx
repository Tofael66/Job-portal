
import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import registerLotti from '../../assets/Lotti/loginAnimation.json'
import AuthContext from '../../Context/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import Google from '../Shared/SocialLogin/Google';








// psd validatin koris


const Registers = () => {

  const {createUser} = useContext(AuthContext) ;

  const  handleRegisdter = e => {
    e.preventDefault() ;
    const from = e.target ;
    const name= from.name.value ;
    const email= from.email.value ;
    const password= from.password.value ;
    console.table(email, password)
    console.log(  name,  email, password)
  
  // password validation koris 
  // show error m,essage 
  createUser(email, password)
.then((result) => {
  // Signed up 
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "SignUp Success full",
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
          <h1 className="text-5xl  pl-4 font-bold">Register Now </h1>
            <form onSubmit={handleRegisdter} className="card-body">
              <fieldset className="fieldset">

              <label className="label">Name</label>
              <input type="text" name='name' className="input" placeholder="Name" />
                <label className="label">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input type="password" name='password' className="input" placeholder="Password" />
               
                <button className="btn btn-primary mt-4">Register Now</button>
              </fieldset>
            </form>
  
            <Google></Google>
           <div className="pl-5 pb-3">
           <Link to='/signIn'><p> all ready have an account  <span className='underline underline-offset-2'>signIn</span></p></Link>
           </div>
       



 

          </div>
        </div>
      </div>
    );
};

export default Registers;