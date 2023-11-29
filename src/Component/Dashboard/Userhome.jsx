

import { Link } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const Userhome = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = []} = useQuery({
      queryKey: ['users'],
      queryFn: async () => {
          const res = await axiosSecure.get('/users');
          return res.data;
      }
  })


    return (
        <div>
             <div className="flex justify-evenly">
                <h2 className="text-4xl">Items :</h2>
                <h2 className="text-4xl">Total Price :{users.length}</h2>
                <Link to="/dashboard/payment"><button className="btn bg-orange-500">Pay</button></Link>
                
            </div>
          <div className="overflow-x-auto">
  <table className="table mt-3">
    {/* head */}
    <thead>
      <tr className="bg-gray-400 mt-3">
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Action</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className="">
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>  
        </div>
    );
};

export default Userhome;

