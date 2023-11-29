import { useContext } from "react";

import { AuthContext } from "../Provider/AuthProvider";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";


const Login = () => {
    const { googleLogin, signIn } = useContext(AuthContext)

    const handelGoogle = () => {
      googleLogin().then((result => {
        console.log(result.user)
      }))
  
    }
    const handelLogin = (event) => {
        event.preventDefault()

        const form = event.target
        const email=form.email.value
        const password =form.password.value
        console.log(email,password)
    
        
            signIn(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser)
                
            })
            Swal.fire({
                        title: 'success',
                        text: 'successfully Login',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
            
                // if(loggedInUser){
            //    
            // }
            // else{
            //     Swal.fire({
            //         title: 'oopps',
            //         text: 'fail to login',
            //         icon: 'error',
            //         confirmButtonText: 'ok'
            //       })
            // }
            
                // .catch(error => console.log(error));

    
        }
    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content">
                <div className="text-center ">
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelLogin} className="card-body">
                        <h1 className="text-5xl font-bold text-orange-600">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        </div>
                        
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                <h3>Create an account</h3>
                            </label>
                       
                        <h2 className="text-orange-600"><NavLink to="/signup">Sign up</NavLink></h2>
                        <div className="form-control mt-6 font-bold ">

                            <button type='submit' className="btn bg-orange-600" >Login</button>
                        </div>
                        <button onClick={handelGoogle} className="btn bg-blue-gray-100"><img src="https://i.ibb.co/8cDBLn5/google-2.png" alt="" className="w-10 h-10 mx-auto" /></button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;