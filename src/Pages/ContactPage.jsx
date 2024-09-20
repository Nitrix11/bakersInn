import Contact from"../components/Contact"
import Cv from "../components/Cv"
import BakeryDepots from "../components/Depot"
import cream from "../assets/cream.png"
import CardCore from "../components/CardCore2"
import pbg from"../assets/p-bg.png"
import Modal1 from"../components/Modal1"
import ModalEx from "../components/ImageCircles"
import ImageComponent from "../components/ImageContainer"
import ImageCircles from"../components/Effect"
function ContactPage(){
    return(
        <>
  
   
           <section className="product-range1">
      <div className="image-container1">
        <img
          src={pbg}
          alt="Product Range"
        />
        <div className="overlay1">
          <h2 className="font-bold">Contact Us</h2>
        </div>
      </div>
    </section>
        <div id="container12" className="flex items-center justify-center w-[100%] bg-[#F7F5E8] py-[30px] my-[100px]">
        <CardCore title="Harare Bread Factory" description="1 Shepperton Road, Graniteside, Harare " description2="+263 242 710334, +263 242 751481, "description3="+263 242 751572, +263 242 758659
" description4="  08677006178"  description5=" 08080151, 08080152 " bold="Econet Toll Free:"  image={cream}/>
 <CardCore bolds="VOIP:" title="Bulawayo Bread Factory" description="22 A Bellevue Road, Belmont, Bulawayo " description2="
+263 9 68383, +263 9 69592, +263 9 76693 "description3="+263 242 751572, +263 242 758659" description4="  08677006178" bold="Econet Toll Free:" h11="void" description6="08080151, 08080152"  description5=" 08080151, 08080152 " image={cream}/>
 
        </div>
        <BakeryDepots/>
        <Cv/>
        <Contact/>
     
        </>
    )
}
export default ContactPage