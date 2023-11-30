import axios from "axios";

export const axiosSecure=axios.create({
    baseURL:"https://server-assignment-12-umber.vercel.app"
})
const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;