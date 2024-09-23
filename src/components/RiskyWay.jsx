import gameone from"../assets/gameone.png"
import gametwo from"../assets/gametwo.png"
import gameothree from"../assets/gamethree.png"
import { Link } from "react-router-dom";
import"../components/Spaceship.css"

function RiskyWay(){
    return(
        <>
        <div id="wrapper11" className="flex gap-[160px] bg-[#FF4655]">
            <div id="text10" className="md:w-[50%]">
                <h1 className="font-bold text-[30px] "> 
                Risky Way
                </h1>
           
                <p>
                Risky Way is a free instant game. The highways<span className="md:hidden"><br /></span> of the future are risky and if you want to<span className="md:hidden"><br /></span> survive you'll need to be smarter than all of <span className="md:hidden"><br /></span>them combined. All you have to do in this <span className="md:hidden"><br /></span>nerve-tingling racing game is click, hold, and let<span className="md:hidden"><br /></span> go. Of course, if you want to be an effective<span className="md:hidden"><br /></span> driver who is able to survive you'll have to<span className="md:hidden"><br /></span> know when to click, how long to hold, and only<span className="md:hidden"><br /></span> let go at the appropriate time.
                </p>
              <Link to="https://www.pacman1.net/">
              <button className="text-[#fff] rounded-[5px] font-bold bg-[#BA8F55]  p-[10px] mt-[10px]">
    PLAY GAME
</button>
              </Link>

            </div>
            <div id="img"  className="w-[40%]"  >
                <img src={gametwo} className="w-[100%]" alt="" />
            </div>
        </div>
        </>
    )
}
export default RiskyWay