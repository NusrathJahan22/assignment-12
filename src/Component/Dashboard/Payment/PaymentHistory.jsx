import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import { axiosSecure } from "../../../Hooks/useAxiosSecure";


const PaymentHistory = () => {
    const {user} =useAuth()
    const {data:payment} =useQuery({
        queryKey: ['payment' ,user.email],
        queryFn: async() =>{
            const res =await axiosSecure.get(`/payment/${user.email}`)
            return res.data;
        }
    })
    return (
        <div>
            <h2 className="text-2xl">Total payment :</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Price</th>
        <th>Transaction Id</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className="bg-base-200">
        {/* <th>{index +1}</th> */}
        <td>${payment.price}</td>
        <td>{payment.transactionId}</td>
        <td>{payment.status}</td>
      </tr>
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default PaymentHistory;