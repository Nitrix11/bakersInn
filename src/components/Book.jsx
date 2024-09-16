import bread2 from"../assets/Factory-bread.png"
function Booking(){
    return(
        <>
        <div id="wrapper" className="flex items-center justify-center gap-[200px] my-[100px]">
            <div id="text">
               <h1 className="text-[#261B6C] text-[32px] font-bold">
               Book A Factory Tour
               </h1>
               <p>
                Keep on seeing how Baker's inn products are made? Are<span><br /></span>you interested in a field trip day for your school's class?<span><br /></span>n touch with us to book a tour of our factory that is <span><br /></span>st to you. Fill i the booking form and we will get<span><br /></span>to you. 
               </p>
               <button className="text-[#fff] rounded-[5px]  bg-[#BA8F55] font-[600] text-[18px] p-[5px] px-[35px] mt-[15px]">
                BOOK FACTORY TOUR
               </button>
               
            </div>
            <div id="imgage" className="w-[40%]">
<img src={bread2} alt="" />
            </div>
        </div>
        </>
    );
}
export default Booking;