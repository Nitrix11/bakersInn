import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Home from "./Pages/Home";
import AboutUs from"./Pages/AboutUs"
import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Footer from "./components/Footer";
import Productss from"./Pages/Productss"
import RecipesPage from"../src/Pages/RecipesPage"
import KidsPage from "./Pages/KidsPage";
import ContactPage from"./Pages/ContactPage"
import "../src/components/App.css"
function App() { 
  return (
   
    <>
    <Router>
    <Nav id="Navbar1"/>
  
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<AboutUs/>}/>
      <Route exact path="/product" element={<Productss/>}/>
      <Route exact path="/recipes" element={<RecipesPage/>}/>
      <Route exact path="/kids" element={<KidsPage/>}/>
      <Route exact path="/contact" element={<ContactPage/>}/>

    </Routes>
    <Footer/>
    </Router>


    </>
  );
}
export default App;
