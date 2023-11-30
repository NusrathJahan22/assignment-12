
import { useLoaderData } from "react-router-dom";


const Cart = () => {
    // const axiosSecure = useAxiosSecure();
    // const { data: cart1 = []} = useQuery({
    //     queryKey: ['cart1'],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get('/cart1');
    //         return res.data; 
    //     }
    // })
    const loader=useLoaderData()
    console.log(loader)
    // const {title,description,options}=cart1
    return (
      <div>
        <h3 className="text-orange-400 font-bold flex justify-center text-4xl mt-4">Most voted surveys</h3>
        <div className="grid grid-cols-3 gap-3 m-3">
          
            {
            loader.map(cart => <div className="card w-96 bg-base-100 shadow-xl" key={cart._id}>
            <div className="card-body">
              <h2 className="card-title">Title : {cart.title}</h2>
              <p>Description : {cart.description}</p>
              <p>Options : {cart.options}</p>
              <p>Category : {cart.category}</p>
              <p>Time : {cart.timestamp}</p>
              <div className="card-actions justify-end">
                <button className="btn bg-orange-400">Explore</button>
              </div>
            </div>
          </div>)   
            }
        </div>
        </div>
    );
};

export default Cart;