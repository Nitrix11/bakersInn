import bread2 from"../assets/Factory-bread.png"
import Modal1 from "../components/Modal1";
import React, { useState } from 'react';
function Booking(){
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };
    return(
        <>
        <div id="wrapper" className="flex items-center justify-center md:gap-[50px] gap-[200px] md:my-[30px] my-[100px]">
            <div id="text" className="md:w-[40%]">
               <h1 className="text-[#261B6C] text-[32px] font-bold md:text-[25px]">
               Book A Factory Tour
               </h1>
               <p className="text-[#261B6C] md:text-[13px]">
                Keep on seeing how Baker's inn products are made? Are<span ><br /></span>you interested in a field trip day for your school's class?<span><br /></span>n touch with us to book a tour of our factory that is <span><br /></span>st to you. Fill i the booking form and we will get<span><br /></span>to you. 
               </p>
               <button onClick={handleOpenModal} className="text-[#fff] rounded-[5px]  bg-[#BA8F55] font-[600] text-[18px] p-[5px] px-[35px] mt-[15px]">
                BOOK FACTORY TOUR
               </button>
               {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
           <Modal1/>
          </div>
        </div>
      )}
               
            </div>
            <div id="imgage" className="w-[40%]">
<img src={bread2} alt="" />
            </div>
        </div>
        </>
    );
}
export default Booking;