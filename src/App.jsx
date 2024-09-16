import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Home from "./Pages/Home";
import AboutUs from"./Pages/AboutUs"
import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Footer from "./components/Footer";
import Productss from"./Pages/Productss"
function App() { 
  return (
   
    <>
    <Router>
    <Nav/>
  
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<AboutUs/>}/>
      <Route exact path="/product" element={<Productss/>}/>
    </Routes>
    <Footer/>
    </Router>


    </>
  );
}
export default App;
