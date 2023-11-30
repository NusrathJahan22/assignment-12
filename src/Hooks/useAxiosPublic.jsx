import axios from "axios";

export const axiosPubilc=axios.create({
    baseURL:'https://server-assignment-12-umber.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPubilc;
};

export default useAxiosPublic;