import logo1 from'../assets/logo1.png'
import feed1 from'../assets/Rectangle 688.png'
import feed2 from'../assets/Rectangle 689.png'
import feed3 from'../assets/Rectangle 690.png'
import icon from'../assets/akar-icons_twitter-fill.svg'
import icon2 from'../assets/akar-icons_facebook-fill.svg'
import icon3 from"../assets/bi_linkedin.svg"
import vector from"../assets/Vector.png"
import mail from"../assets/mail.svg"
import footerpic from"../assets/inscor_logo@2x 1.png"
import { Link } from "react-router-dom";
import"../components/Footer.css"
function Footer(){
    return(<>
    <div id="wrapper" className='bg-[#261B6C]'>
        <div id="lines" className='flex items-center'>
            <hr className='w-[50%] mt-[140px]  ml-[20px] mr-[20px]' />
            <img className='w-[10%]' src={logo1} alt="" />
            <hr className='w-[50%] mt-[140px] border-2px  ml-[20px] mr-[20px]' />
        </div>
        <div id="main"  className='flex  gap-[300px] pt-[30px]' >
        <div id="instagramfeed " className="w-[20%]">
            <h1 id="h1" className='text-[#fff] font-bold text-[20px]  mb-[10px] ml-[20px] '>Instagram Feed</h1>
            <div id="pic5" className='flex w-[45%] gap-[15px] ml-[20px]'>
                <img src={feed1} alt="" />
                <img src={feed2} alt="" />
                <img src={feed3} alt="" />
            </div>
            <div id="icons" className='flex w-[10%] gap-[5px] mt-[20px] mb-[10px]  ml-[20px]'>
                <img src={icon} alt="" />
                <img src={icon2} alt="" />
                <img src={icon3} alt="" />


            </div>
        </div>
        <div id="wrapper2" className='flex gap-[100px] pt-[30px]'>

     
        <div id="location">
            <h1 className='font-bold text-[#fff]'>
            Our Location
            </h1>
            <p className='text-[#fff]'>
            1 Shepperton Road,<span><br /></span> Graniteside,<span><br /></span>
Harare,<span><br /></span>
Zimbabwe.
            </p>
        </div>
        <div id="getintouch">
            <h1 className='font-bold text-[#fff]'>
            Get In Touch With Us
            </h1>
            <p className='flex text-[#fff] gap-[8px]'>
                <img src={vector}  className=' w-[5%] h-[5%] mt-[6px] ml' alt="" />
                08080151 
            </p>
            <p className='text-[#fff]'>08080152</p>
            <p className='text-[#fff]'>+263 242 751 481</p>
            <p className='flex text-[#fff] gap-[8px]'>
                <img src={mail}  className=' w-[5%] h-[5%] mt-[6px] ml' alt="" />
                marketing@bakersinnzim.com
            </p>

        </div>
        <div id="sitemap">
            <h1  className='font-bold text-[#fff]'>
            Sitemap
            </h1>
            <ul className='text-[#fff]'>
                <Link to="/">
                <li><a href="#">Home</a></li>
                </Link>
                <Link to="/about">
                <li><a href="">About Us</a></li>  
                    </Link>
                    <Link to="/product">
                    <li><a href="">Products</a></li>
                    </Link>
                    <Link to="/recipes">
                    <li><a href="">Recipes</a></li>
                    </Link>
                    <Link to="/kids">
                       
                <li><a href="">Kids Corner</a></li>
                    </Link>
            
            
                
          
            </ul>
        </div>
        </div>
        </div>
        <hr className='mb-[15px]  ml-[20px] mr-[20px]' />
        <div id="last-footer" className='flex items-center justify-between text-[#fff] p-[15px ] '>
        <p id='copyright' className='flex items-center text-[#fff] ml=[3100px]' >
        Subsidiary of
        <img src={footerpic} alt="" className='p-[10px ] pb-[21px]'/>


        </p>
        <p className='tex-[#fff] pr-[20px]'>
        Copyright © 2022 Bakers Inn. All rights reserved. Site by <span className='text-[#BA8F55] font-bold'>Nyasha Petro</span>
        </p>
        </div>
   
        
    </div>

    </>)
}
export default Footer;