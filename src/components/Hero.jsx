import bread from"../assets/Group 2.png"
import rectangle from"../assets/Rectangle 10.png"
import rectangle2 from"../assets/Rectangle 10.png"
import { Link } from "react-router-dom";
import About from "./About";
import'../components/Hero.css'
function Hero(){
    return(
        <div id="hero-text" className="flex item-center justify-center">
   
        <div id="text" className="mt-[20px] ml-[35px]">
        <div className="rectangle">
<img src={rectangle} alt="" />
</div>
<div className="rectangle2">
<img src={rectangle2} alt="" />
</div>
<h1 id="bringing" className="text-[#fff] font-bold text-[50px] ">Bringing you the <br/> <span> best value </span> at the<br/><span> best price.</span></h1>
<p className="text-[#fff] text-[18px] mt-[10px]">
   The freshest sandwiches you can make are<br/> with Baker's inn soft white loaf.
</p>

<a href="#abt-wrapper">
<button id="button112" className="text-[#fff] rounded-[5px] font-bold bg-[#BA8F55] text-[18px] p-[10px] mt-[10px]">
    Read More
</button>
</a>



        </div>
        <div id="bread" className="w-[65%]">
<img src={bread} alt="" />
        </div>
        </div>
    );
}
export default Hero;