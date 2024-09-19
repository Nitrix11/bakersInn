import people from"../assets/Rectangle 31.png"
function Donation(){
    return(<>
    <div id="wrapper" className="flex bg-[#F8F8F8]  h-[100vh]
    md:h-[50vh] items-center justify-center gap-[20px] md:my-[30px] my-[150px] mx-[5px]">
        <div className="w-[50%]">
            <img className="w-[80%]" src={people} alt="" />
        </div>
        <div id="text3" className="w-[30%] md:w-[35%]"  >
            <h1 className="text-[#261B6C] text-[32px]  md:text-[25px] font-bold">
                Request A Donation
            </h1>
            <p className="text-[#261B6C] md:text-[13px]">
                If you are holding an event that you wish to have us <span  className="md:hidden"><br /></span> donation to, we're more than glad to help. Fill in the<span  className="md:hidden"><br /></span> donation request from for us to best understand how we <span  className="md:hidden"><br /></span> can increase your event's impact in the local comunity
            </p>
            <button className="text-[#fff] rounded-[5px]  bg-[#BA8F55] font-[600] text-[18px] p-[5px] px-[35px] mt-[15px]">
                REQUEST DONATION
            </button>
        </div>
    </div>
    </>)
}
export default Donation;