import React from 'react';
import { useState } from 'react';
function DonationModal() {

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  return (
    <section id='DonationModal'>
      <h1 className='font-bold text-center ' style={{ color: '#261B6C' }}>Request Product Donations</h1>
      <p className='  text-[#261B6C] text-[10px] text-center py-[10px]'>
      You can apply for product donations by completing this form, we will contact you should your application be successful. Please bear in mind that we will need at least 3 weeks’ notice to the date of your event
      </p>
      <form>
        <div className="input-group">
          <input type="text" placeholder="Name of Organization" />
          <input type="text" placeholder="Name of Contact Person" />
        </div>
        <div className="input-group">
          <input type="text" placeholder="Contact Person Position" />
          <input type="text" placeholder=" Organization Address" />
        </div>
        <div className="input-group">
          <input type="tel" placeholder="Contact Person's Telephone" />
          <input type="email" placeholder="Contact Person's Email" />
        </div>
        <div className="input-group">
        <input type="date" placeholder="Date of Visit" />
        <select style={{ backgroundColor: '#F7F5E8', width: '50%' }}>
          <option value="">Intended Use of Donation</option>
          <option value="1-5">buy ######</option>
          <option value="6-10">create ########</option>
          <option value="11-20">#########3</option>
          <option value="21+">###################</option>
        </select>
        </div>
        <div id='input-group' className="input-group">
        <select className='p-[10px]' style={{ backgroundColor:'#F7F5E8', width: '100%',padding:"10ox" }}>
          <option value="">Number of Attendants</option>
          <option value="18-24">18-24</option>
          <option value="25-34">25-34</option>
          <option value="35-44">35-44</option>
          <option value="45+">45+</option>
        </select>
        <select className='p-[5px]' style={{ backgroundColor:'#F7F5E8', width: '100%',padding:"10ox" }}>
          <option value="">What Product Are Specifically Looking For?</option>
          <option value="18-24">#####</option>
          <option value="25-34">2#####</option>
          <option value="35-44">3#######</option>
          <option value="45+">########+</option>
        </select>
        </div>
     
        <div className="flex-center ">
      
          
        </div>
       

        <button onClick={handleOpenModal} className='bg-[#B2904C] w-[100%] text-[#fff]' type="submit" style={{ width: '100%' }}>Proceed to next step</button>
        {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close1" onClick={handleCloseModal}>
              &times;
            </span>
            <div className="second-popup">
          <div className="second-popup-content">
            <button className="second-close-btn" onClick={() => setIsSecondPopupOpen(false)}>×</button>
            <h3>Request Product Donations</h3>
            <form>
              <textarea placeholder="How do you intend on using the product?" required></textarea>
              <textarea placeholder="How will the community benefit from you as a result of our donation?" required></textarea>
              <textarea placeholder="If there's any additional information that you would like to supply us with, which we have not asked you about, please let us know." required></textarea>
              <button type="submit" className="submit-btn">Submit Application</button>
            </form>
          </div>
        </div>
          </div>
        </div>
      )}

   
      </form>
    </section>
  );
}

export default DonationModal;
