import kidscorner from"../assets/Kid's Corner.png"
import games from"../assets/GAMES.png"

function Game1(){
    return(
        <>
        <div id="wrapper9" className=" flex item-center m-[20px] ">
            <img src={kidscorner} className="w-[30%] h-[20%]" alt="" />
            <img src={games} className="w-[55%]" alt="" />
        </div>
        </>
    )
}
export default Game1