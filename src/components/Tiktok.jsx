import profile from"../assets/profile-b.png"
import one from"../assets/recipes1.png"
import two from"../assets/recipes2.png"
import three from"../assets/recipes3.png"
import four from"../assets/recipes4.png"
import ImageCircles from"../components/Effect"
function Tiktok(){
return(
    <>
    <div id="tiktok-banner" className="flex item-center ">
       <div id="text9" className="ml-[20px]">
        <h1 className="text-[#261B6C] text-[52px] font-bold">
        The Finest of <span><br /></span> Baker’sTik Tok<span><br /></span> Community Recipes
        </h1>
        <p className="text-[#261B6C] font-bold mt-[15px] ">
        Make the finest croissants worthy of    Paris from your     home<span><br /></span>
#Croissant #Zimbabwe #Paris #Baker’s_Inn
        </p>
        <img src={profile} className="w-[45%]" alt="" />
       </div>
       { <div id="image6" className="w-[50%] mr-[70px]" >
        {/* <div id="one" className="flex gap-[15px]">
            <img className="w-[35%]" src={one} alt="" />
            <img className="w-[35%]" src={two} alt="" />
        </div>
        <div id="two" className="flex gap-[19px] mt-[19px]">
            <img src={three} className="w-[35%]" alt="" />
            <img src={four} className="w-[35%]" alt="" />
        </div> */}
         <ImageCircles/>
       </div> }
      

    </div>
    </>
);
}
export default Tiktok;