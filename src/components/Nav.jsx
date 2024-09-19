import logo from"../assets/bakers-inn-category 1.png"

import { Link } from "react-router-dom";
function Nav(){
    return(
        <>
        <nav id="nav" className="flex items-center justify-between height-[10px] sticky sm:hidden" >
            <div className="logo ">
                <Link to="/">
                <img className="w-[65%] md:w-[50%] h-[50%] pl-[15px]" src={logo} alt="" />     
                </Link>

            </div>
            <div id="links" className="flex items-center justify-between pr-[15px]">
                <ul className="flex justify-center gap-[20px] md:text[13px] md:gap-[10px]"  >
                    <Link to="about">
                    <li><a href="" className="text-[#261B6C] text-[22px] font-bold">  About Us</a></li>
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
               
                <button className=" text-[#fff] rounded-[5px] font-bold bg-[#BA8F55] p-[10px] ml-[20px] ">CONTACT US</button>
                </Link>
            </div>
        </nav>
        </>
    );
}
export default Nav;