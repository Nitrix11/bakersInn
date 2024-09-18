import gameone from"../assets/gameone.png"
import gametwo from"../assets/gametwo.png"
import gamethree from"../assets/gamethree.png"
import { Link } from "react-router-dom";


function Pacman(){
    return(
        <>
        <div id="wrapper12" className="flex gap-[160px] bg-[#261B6C]">
            <div id="text10">
                <h1 className="font-bold text-[30px] "> 
                Pacman
                </h1>
           
              
                <p>
                There's nothing like a little old school Pacman<span><br /></span> game right? The great arcade game Pac Man<span><br /></span> was ported to the NES in 1988 and you can <span><br /></span>play it right here. Never played before?!<span><br /></span> What?! Eat all the pellets to complete a stage<span><br /></span> while trying to score as many points as possible<span><br /></span> by eating fruit and ghosts along the way! But<span><br /></span> there's more! Ever wonder how Pacman got<span><br /></span> started? Check out the history of Pacman<span><br /></span> below and see how it all began.
                </p>
              <Link to="https://www.pacman1.net/">
              <button className="text-[#fff] rounded-[5px] font-bold bg-[#BA8F55]  p-[10px] mt-[10px]">
    PLAY GAME
</button>
              </Link>

            </div>
            <div id="img"  className="w-[40%]"  >
                <img src={gamethree} className="w-[100%]" alt="" />
            </div>
        </div>
        </>
    )
}
export default Pacman