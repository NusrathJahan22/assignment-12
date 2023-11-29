import axios from "axios";

export const axiosPubilc=axios.create({
    baseURL:'http://localhost:5000'
})

const useAxiosPublic = () => {
    return axiosPubilc;
};

export default useAxiosPublic;