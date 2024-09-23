import CoreValues from "../components/Core";
import Mission from "../components/Mission";
import "../components/AboutUs.css"
import BG from"../assets/abt-bg.png"
function About(){
    return(
        <>
         <section className="product-range1">
      <div className="image-container1">
        <img
          src={BG}
          alt="Product Range"
        />
        <div className="overlay1">
          <h2 className="font-bold">Contact Us</h2>
        </div>
      </div>
    </section>
      {/* <div id="abt-hero"  className="text-left h-[50vh] ">
        <h1 id="abt-h1" className="text-[#fff] font-bold text-[40px] mt-[420px] pl-[20px] ">About Us</h1>
      </div> */}
      <Mission/>
      <  CoreValues id="Core"/>
        </>
    );
}
export default About;