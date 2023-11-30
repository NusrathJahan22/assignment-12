import { useLoaderData } from "react-router-dom";


const Survey = () => {
    const loader = useLoaderData()
    console.log(loader)
    return (
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
    );
};

export default Survey;