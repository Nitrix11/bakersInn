import About from "../components/About";
import Booking from "../components/Book";
import Donation from "../components/Donations";
import Hero from "../components/Hero";
import Kids from "../components/Kids-corner";
import Notify from "../components/Notify";
import Products from "../components/Products";
import Tabs from "../components/Recipes";
function Home(){
    return(
        <>
     
     <Hero/>
     <About/>
     <Products/>
     <Booking/>
     <Donation/>
     <Kids/>
     <Tabs/>
     <Notify/>

        </>
    )
}
export default Home;