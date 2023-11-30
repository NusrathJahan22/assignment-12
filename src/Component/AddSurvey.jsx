import { useState } from "react";
import { useForm } from "react-hook-form";


const AddSurvey = () => {
    const [yesVot] = useState(0)
    const [noVot] = useState(0)
    const [likeVot] = useState(0)
    const [dislikeVot] = useState(0)

    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => { const fromData = { ...data, yesVot, noVot, likeVot, dislikeVot } }

    // const handleAddSurvey = e => {
    //     e.preventDefault()
    //     const form = e.target
    //     const description = form.description.value
    //     const Category = form.Category.value
    //     const title = form.title.value
    //     const email = form.email.value
    //     const date = form.date.value
    //     const survey = {date, email, title, Category, description }
    //     console.log(survey)

    //     fetch("https://server-assignment-12-umber.vercel.app/survey", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(survey),
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //         });
    // };
    return (
        <div>
            <div className=" bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center  lg:text-left">
                        <h1 className="text-5xl font-bold text-orange-500">Add Survey</h1>

                    </div>
                    <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="card-body ">
                                <div className="form-control">

                                    <label className="label">
                                        <span className="label-text">Title</span>
                                    </label>
                                    <input type="text" placeholder="title"  {...register("title", { required: true })} className="input input-bordered" required name="title" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email"  {...register("email")} placeholder="email" className="input input-bordered" required name="email" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Sort description</span>
                                    </label>
                                    <input type="text" placeholder="description" {...register("description", { required: true })} className="input input-bordered" required name="description" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Time </span>
                                    </label>
                                    <input type="date" placeholder="date" {...register("date", { required: true })} className="input input-bordered" required name="date" />
                                </div>
                                <label className="Category">
                                    <select name="Category" placeholder="Category" required {...register("Category", { required: true })} className="select  w-full input input-bordered">
                                        <option value="Residential">Residential</option>
                                        <option value="Recreational">Recreational</option>
                                        <option value="Education">Education</option>
                                        <option value="Technology">Technology</option>
                                        <option value="Business and Marketing">Business and Marketing</option>
                                        <option value="Demographic">Socail and Demographic</option>
                                    </select>
                                </label>


                                <div className="form-control mt-6">
                                    <input className="btn bg-orange-600" type="submit" value="Add surevy" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>



        //     <div className="">
        //         <p className='text-5xl text-center font-bold text-light-blue-600 '>Add Survey</p>
        //     <div className="flex justify-evenly">


        //         <form onSubmit={handleAddSurvey} className='md:w-3/4 lg:w-1/2 mx-auto text-bold'>
        //             <div className="form-control">

        //                 <label className="label">
        //                     <span className="label-text">Title</span>
        //                 </label>
        //                 <input type="text" placeholder="title" className="input input-bordered" required name="title" />
        //             </div>
        //             <div className="form-control">

        //                 <label className="label">
        //                     <span className="label-text">Email</span>
        //                 </label>
        //                 <input type="email" placeholder="email" className="input input-bordered" required name="email" />
        //             </div>
        //             <div className="form-control">
        //                 <label className="label">
        //                     <span className="label-text">Sort description</span>
        //                 </label>
        //                 <input type="text" placeholder="description" className="input input-bordered" required name="description" />
        //             </div>
        //             <div className="form-control">
        //                 <label className="label">
        //                     <span className="label-text">Time </span>
        //                 </label>
        //                 <input type="date" placeholder="date" className="input input-bordered" required name="date" />
        //             </div>

        //             <div className="form-control w-full">
        //                 <label className="label">
        //                     <span className="label-text">Category</span>
        //                 </label>
        //                 <label className="">
        //                     <select name="Category" required className="select  w-full input input-bordered">
        //                         <option value="Residential">Residential</option>
        //                         <option value="Recreational">Recreational</option>
        //                         <option value="Education">Education</option>
        //                         <option value="Technology">Technology</option>
        //                         <option value="Business and Marketing">Business and Marketing</option>
        //                         <option value="Demographic">Socail and Demographic</option>
        //                     </select>
        //                 </label>

        //                 <div className="flex">
        //                     <label >
        //                         <input type="radio" name="feedback" id="" value="like" />
        //                         Like
        //                     </label>
        //                     <label>
        //                         <input type="radio" name="feedback" id="" value="dislike" />
        //                         Dislike
        //                     </label>
        //                 </div>
        //             </div>
        //             <div className="form-control mt-6">
        //                 <button className="btn bg-orange-600 text-white">Add Survey</button>
        //             </div>

        //         </form>
        //     </div>
        // </div>
    );
};

export default AddSurvey;