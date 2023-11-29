import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const CheckoutFrom = () => {
    const [clientSecret ,setCilentSecret] =useState('')
    const [error, setError] = useState('')
    const stripe = useStripe();
    const axiosSecure = useAxiosSecure()
    const elements = useElements();
    const [transactionId ,setTransactionId] =useState('')
    const navigate=useNavigate()
    // (todo)
    const {user} =useAuth()
    // const [cart,refetch]=useCart()
    // const totalPrice =cart.reduce()

    useEffect(() => {
        // if(totalPrice > 0 ){
           
        // }
        axiosSecure.post('/create-payment-intent', {})
        // price:totalPrice
            .then(res => {
                console.log(res.data.clientSecret)
                setCilentSecret(res.data.clientSecret)
            })
    
}, [])
// axiosSecure,totalPrice
    const handelSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('payment error', error)
            setError(error.message)
        }
        else {
            console.log('payment method', paymentMethod)
            setError('');
        }
        // confirm payment
        const {paymentIntent,error: confirmError} =await stripe.confirmCardPayment(clientSecret ,{
            payment_method:{
                card:card,
                billing_details:{
                    email:user?.email || 'anonymous',
                    name:user?.displayName || 'anonumonus'
                }
            }
        })

        if(confirmError){
            console.log('confirm error')
        }
        else{
            console.log('payment intent' ,paymentIntent)
            if(paymentIntent.status === 'succeeded'){
                console.log('transaction id' ,paymentIntent.id)
                setTransactionId(paymentIntent.id)

                // save the payment in the database

                // const payment ={
                //     email : user.email,
                //     price:totalPrice,
                //     date:new Date(),
                //     cartId :cart.map(item => item._id),

                //     status:'pending'
                // }
                // const res =await axiosSecure.post('/payment',payment);
                // console.log('payment save' ,res.data);
                // refetch()
                // if(res.data?.paymentResult?.insertedId){
                //     Swal.fire({
                //         position: "top-end",
                //         icon: "success",
                //         title: "thank you",
                //         showConfirmButton: false,
                //         timer: 1500
                //       });
                navigate('/dashboard/history')
                // }
            }
        }
    }

    return (
        <form onSubmit={handelSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-sm bg-orange-500 my-4" type="submit" disabled={!stripe}>
                Pay
            </button>
            <p className="text-red-500 ">{error}</p>
            {transactionId && <p className="text-green-500">Your Transaction id :{transactionId}</p>}
        </form>
    );
};

export default CheckoutFrom;