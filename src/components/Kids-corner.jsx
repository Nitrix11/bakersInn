import mario from"../assets/new-super-mario-bros-2-super-paper-mario-png-favpng-rsGyK8GSVR5JcU6tF9nzJCgB8-removebg-preview 1.png"
import text from"../assets/KIDS-CORNER.png"
import mario2 from"../assets/mario2.png"
function Kids(){
    return(
        <>
        <div id="wrapper-kids">
        <div id="Kids">
       <div id="img2" className="w-[50%] mb-[59px]">
        <img className="w-[88%]" src={mario2} alt="" />
       </div>
       <div id="text4" className="text-center flex flex-col items-center">
        <img  className="w-[85%]" src={text} alt="" />
        <p className="text-center text-[#fff] text-[20px] ">
        Let your children join the fun. Explore a place <span><br /></span> with exciting games and the top winners stand a<span><br /></span> chance to win exciting monthly prizes!
        </p>
        <button className="text-[#fff] rounded-[5px] font-bold bg-[#FF4655]  p-[10px] mt-[20px]">
            PLAY GAMES
        </button>
       </div>
        </div>
        </div>
     
        </>
    )
}
export default Kids;