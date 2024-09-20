import abt4 from "../assets/bread.png";
import abt2 from "../assets/abt2.png";
import donut from "../assets/donuts.png";
import scone from "../assets/scone.png";
import { Link } from "react-router-dom";
import"../components/Product.css"

function Products() {
  return (
    <>
      <div id="P-wrapper" className="bg-[#F8F8F8] h-[90vh] ">
        <div id="text2">
          <h1 className="text-[#261B6C] text-[32px] font-bold text-center m-[30px]" >
            Our Product Range
          </h1>
        </div>
        <div id="products" className=" relative flex w-[90%] gap-[20px]">
          <div className="card1">
            <img id="item" className="relative " src={abt4} alt="" />

            <div id="type">
              <h3>Bread</h3>
            </div>
          </div>
          <div className="card1">
            <img id="item" className="relative " src={abt2} alt="" />

            <div id="type">
              <h3>Meet Pie</h3>
            </div>
          </div>
          <div className="card1">
            <img id="item" className="relative " src={scone} alt="" />

            <div id="type">
              <h3>Scones</h3>
            </div>
          </div>

          <div className="card1">
            <img id="item" className="relative " src={donut} alt="" />

            <div id="type">
              <h3>Donuts</h3>
            </div>
          </div>
        </div>
        <Link to="/product">
        <button className="text-[#fff] rounded-[5px]  bg-[#BA8F55] font-[600] text-[18px] p-[5px] px-[35px] mt-[15px]">
            VIEW COMPLETE RANGE
        </button>
        </Link>
      
      </div>
    </>
  );
}
export default Products;
