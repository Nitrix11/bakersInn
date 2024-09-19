import CoreValues from "../components/Core";
import Mission from "../components/Mission";

function About(){
    return(
        <>
   
      <div id="abt-hero"  className="text-left md:h-[20vh] ">
        <h1 className="text-[#fff] font-bold text-[40px] mt-[420px] pl-[20px] ">About Us</h1>
      </div>
      <Mission/>
      <CoreValues/>
        </>
    );
}
export default About;