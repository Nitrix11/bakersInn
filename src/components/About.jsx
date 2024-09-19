import abt1 from"../assets/abt1.png";
import abt2 from"../assets/abt2.png";
import abt3 from"../assets/abt3.png";
import abt4 from"../assets/abt4.png"
import { Link } from "react-router-dom";

function About(){
    return(
        <div id="abt-wrapper" className="flex-col mt-[70px] mb-[50px] " >
        <div id="abt-text" className="flex justify-between mr-[80px] ml-[40px] md:mr-[10px] md:ml-[10px]">
<h1 className="text-[#261B6C] text-[32px] md:text-[25px] font-bold">
    About Baker's Inn
</h1>
<div className="text-[#261B6C] ">
    <p className="md:text-[13px]">It all started back in the eighties when Baker's Inn was <span><br /></span>confectionery company that employed 40 people and produced about<span><br /></span>30,000 loaves a day. We now aim to provide a nourishing convenient and <span><br /></span>accessible answer to hunger's call</p>
<Link to="/about">
<button className="text-[#fff] rounded-[5px] font-bold bg-[#BA8F55]  p-[10px] mt-[10px]">
    Read More
</button>
</Link>




</div>
        </div >
        <div id="pics" className="flex  w-[22.9%] md:w-[18.9%] gap-[20px] m-[20px] ml-[25px]">
        <img src={abt1} alt="" />
<img src={abt2} alt="" />
<img src={abt3} alt="" />
<img src={abt4} alt="" />
        </div>

        </div>
    );
}
export default About;