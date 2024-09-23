import logo from"../assets/bakers-inn-category 1.png"
import"../components/Nav.css"
import HamburgerMenu from"../components/Menu"
import { Link } from "react-router-dom";
function Nav(){
    return(
        <>
        <nav id="nav" className="flex items-center justify-between height-[10px] sticky " >
            <div className="logo ">
                <Link to="/">
                <img className="w-[65%]  h-[50%] pl-[15px]" src={logo} alt="" />     
                </Link>

            </div>
            <div id="links" className="flex items-center justify-between pr-[15px]">
                <ul className="flex justify-center gap-[20px]"  >
                    <Link to="about">
                    <li id="li"><a href="" className="text-[#261B6C] text-[22px] font-bold">  About Us</a></li>
                    </Link>
                    
                   <Link to='product'>
                   <li><a href="" className="text-[#261B6C] text-[22px] font-bold" >Products</a></li>
                   </Link>
                   <Link to="recipes">
           
                    <li><a href="" className="text-[#261B6C] text-[22px] font-bold" >Recipes</a></li>
                    </Link>
                    <Link to="kids">
                    <li><a href="" className="text-[#261B6C] text-[22px] font-bold" >Kid's Corner</a></li>
                    </Link>
                    
                </ul>
                <Link to='contact'>
               
                <button id="button11" className=" text-[#fff] rounded-[5px] font-bold bg-[#BA8F55] p-[10px] ml-[20px] ">CONTACT US</button>
                </Link>
                <div  id="Menu">
                <HamburgerMenu  id="menu1"/>
                </div>
              
              
            </div>
           
        </nav>
        </>
    );
}
export default Nav;