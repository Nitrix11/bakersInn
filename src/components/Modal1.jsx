import React from 'react';

function BookFactoryTour() {
  return (
    <section>
      <h1 className='font-bold text-center ' style={{ color: '#261B6C' }}>Book A Factory Tour</h1>
      <form>
        <div className="input-group">
          <input type="text" placeholder="Name of Organization" />
          <input type="text" placeholder="Name of Contact Person" />
        </div>
        <div className="input-group">
          <input type="text" placeholder="Organization Address" />
          <input type="text" placeholder="Organization's Resident Town" />
        </div>
        <div className="input-group">
          <input type="tel" placeholder="Contact Person's Telephone" />
          <input type="email" placeholder="Contact Person's Email" />
        </div>
        <div className="input-group">
        <input type="date" placeholder="Date of Visit" />
        <select style={{ backgroundColor: '#F7F5E8', width: '50%' }}>
          <option value="">Number of Participants</option>
          <option value="1-5">1-5</option>
          <option value="6-10">6-10</option>
          <option value="11-20">11-20</option>
          <option value="21+">21+</option>
        </select>
        </div>
        <select className='p-[10px]' style={{ backgroundColor:'#F7F5E8', width: '100%',padding:"10ox" }}>
          <option value="">Age Range of Participants</option>
          <option value="18-24">18-24</option>
          <option value="25-34">25-34</option>
          <option value="35-44">35-44</option>
          <option value="45+">45+</option>
        </select>
     
        <div className="flex-center ">
          <div className='flex text-[#261B6C] text-[10px] py-[13px] gap-[20px]'><p>Plant Visit <span id='underline-modal'>Terms & Conditions</span></p>
          <p>Plant Visit <span id='underline-modal'>Safety Regulations.</span></p>

          </div>
          
        </div>
        <p className='  text-[#261B6C] text-[10px]'>Your organisation has agreed to the submission of this application and you have authorisation to submit it. The information you have provided on behalf of your organisation is accurate, full and correct.</p>
        <p className='flex text-[#261B6C] text-[10px] py-[17px]'>Have Read The Safety Regulations</p>

        <button className='bg-[#B2904C] w-[100%] text-[#fff]' type="submit" style={{ width: '100%' }}>Submit</button>
      </form>
    </section>
  );
}

export default BookFactoryTour;
