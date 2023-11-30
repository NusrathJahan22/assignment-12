import Cart from "../Component/Cart";
import FaqQuestion from "../Component/FaqQuestion";
import Footer from "../Component/Footer";
import Section3 from "../Component/Section3";
import Testimonial from "../Component/Testimonial";


const Home = () => {
    return (
        <div>
           <div className="hero w-full  h-1000">
                <img src="https://i.ibb.co/H4rcMVG/national-cancer-institute-g-AE02n-Lo-Ws-unsplash.jpg" alt="" className="w-full "/>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-orange-500">Best Land Surveying & Digital Mapping Service</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn bg-orange-500">Get Started</button>
                    </div>
                </div>
            </div>
            <Cart></Cart>
            <FaqQuestion></FaqQuestion>
            <Section3></Section3>
            <Testimonial></Testimonial>
            <Footer></Footer>
           
        </div>
    );
};

export default Home;