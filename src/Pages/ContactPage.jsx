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
  
   
           <section className="product-range">
      <div className="image-container">
        <img
          src={pbg}
          alt="Product Range"
        />
        <div className="overlay">
          <h2 className="font-bold">Contact Us</h2>
        </div>
      </div>
    </section>
        <div className="flex md:flex-col items-center justify-center">
        <CardCore title="Harare Bread Factory" description="1 Shepperton Road, Graniteside, Harare " description2="+263 242 710334, +263 242 751481, "description3="+263 242 751572, +263 242 758659
" description4="  08677006178" bold="VOIP:" image={cream}/>
 <CardCore title="Bulawayo Bread Factory" description="22 A Bellevue Road, Belmont, Bulawayo " description2="
+263 9 68383, +263 9 69592, +263 9 76693 "description3="+263 242 751572, +263 242 758659" description4="  08677006178" bold="VOIP:" image={cream}/>
 
        </div>
        <BakeryDepots/>
        <Cv/>
        <Contact/>
     
        </>
    )
}
export default ContactPage