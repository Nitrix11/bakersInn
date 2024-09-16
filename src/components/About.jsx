import abt1 from"../assets/abt1.png";
import abt2 from"../assets/abt2.png";
import abt3 from"../assets/abt3.png";
import abt4 from"../assets/abt4.png"
function About(){
    return(
        <div id="abt-wrapper" className="flex-col mt-[70px] mb-[50px] " >
        <div id="abt-text" className="flex justify-between m-[20px]">
<h1 className="text-[#261B6C] text-[32px] font-bold">
    About Baker's Inn
</h1>
<div className="">
    <p>It all started back in the eighties when Baker's Inn was <span><br /></span>confectionery company that employed 40 people and produced about<span><br /></span>30,000 loaves a day. We now aim to provide a nourishing convenient and <span><br /></span>accessible answer to hunger's call</p>
    <button className="text-[#fff] rounded-[5px] font-bold bg-[#BA8F55]  p-[10px] mt-[10px]">
    Read More
</button>

</div>
        </div >
        <div id="pics" className="flex  w-[22.9%] gap-[20px] m-[20px] ml-[25px]">
        <img src={abt1} alt="" />
<img src={abt2} alt="" />
<img src={abt3} alt="" />
<img src={abt4} alt="" />
        </div>

        </div>
    );
}
export default About;