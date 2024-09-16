import bread3 from"../assets/Group 1.png"

function Notify(){
    return(<>
    <div id="wrapper4" className="flex">
        <div id="Notify" className="my-[100px] gap-[60px]">
            <div id="email">
                <h1 className="text-[#fff] font-bold text-[30px] my-[20px]">
                Get Notified About<span><br /></span>Promotions We Offer
                </h1>
                <form action="" className="text-[#fff]">
                    <input type="email" placeholder="your email" className=" px-[15px] rounded-[5px] relative bg-[#C6A460] text-[#fff] w-[500px] py-[10px]" />
                    <button className=" px-[30px] py-[5px] rounded-[3px] bg-[#261B6C] text-[#fff] absolute font-[600]  left-[435px] m-[5px]">
                        
                        SUBMIT 
                    </button>
                </form>

              
            </div>
            <div id="img2" className="w-[50%]">
                <img src={bread3} className="w-[90%] mb-[50px]"  alt="" />
            </div>
        </div>
    </div>
    </>)
}
export default Notify;