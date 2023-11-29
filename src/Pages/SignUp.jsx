import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { updateProfile } from "firebase/auth";



const SignUp = () => {

    const axiosPublic =useAxiosPublic()
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()
    const { createUser} = useContext(AuthContext)
    const onSubmit = (data) => {
        console.log(data)

        createUser(data.email, data.password)
            .then(result => {
                const logged = result.user
                console.log(logged)
                updateProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log('user profile is updated')
                        const UserInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', UserInfo)
                            .then(res => {
                                if (res.data.InsertedId) {
                                    console.log('user added')
                                    reset()
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "User Created successfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/')
                                }
                            })
                    }

                    )
                    .catch(error => console.log(error))
            })
    }
    console.log(watch("example"))

   

    
    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center  lg:text-left">
                    <h1 className="text-5xl font-bold text-orange-500">Please Sign Up</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" required />
                                {errors.name && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">photoURL</span>
                                </label>
                                <input type="photoURL" {...register("photoURL", { required: true })} name="photoURL" placeholder="photoURL" className="input input-bordered" required />
                                {errors.name && <span>This field is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email")} name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password")} name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            
                            <p><Link to="/login" className="text-orange-600">login now</Link></p>
                            <div className="form-control mt-6">
                                <input className="btn bg-orange-600" type="submit" value="Sign Up" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
);

    
    }   

export default SignUp;