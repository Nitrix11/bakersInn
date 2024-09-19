import gameone from"../assets/gameone.png"
import gametwo from"../assets/gametwo.png"
import gameothree from"../assets/gamethree.png"
import { Link } from "react-router-dom";


function Spaceship(){
    return(
        <>
        <div id="wrapper10" className="flex gap-[160px] bg-[#018BF1]">
            <div id="text10" className="md:w-[50%]">
                <h1 className="font-bold text-[30px] "> 
                Spaceship Maze
                </h1>
                <p>
                Help the spaceship through the maze to get<span className="md:hidden"><br /></span> back to earth. Move through levels with<span className="md:hidden"><br /></span> increasing difficulty; each puzzle starts the ship<span className="md:hidden"><br /></span> in a different location. 
                </p>
                <p>
Develop kids’ skills in strategizing, spatial<span className="md:hidden"><br /></span> awareness, hand-eye coordination, problem<span className="md:hidden"><br /></span> solving and more! Free to play, priceless for<span className="md:hidden"><br /></span> learning.

                </p>
                <Link to="https://toytheater.com/maze/">
                <button className="text-[#fff] rounded-[5px] font-bold bg-[#BA8F55]  p-[10px] mt-[10px]">
    PLAY GAME
</button>
                </Link>
 
            </div>
            <div id="img"  className="w-[40%]"  >
                <img src={gameone} className="w-[100%]" alt="" />
            </div>
        </div>
        </>
    )
}
export default Spaceship