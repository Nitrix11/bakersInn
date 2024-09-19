import React from 'react';

function BookFactoryTour() {
  return (
    <section>
      <h1 style={{ color: '#261B6C' }}>Book A Factory Tour</h1>
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
        <select style={{ backgroundColor: '#F7F5E8', width: '100%' }}>
          <option value="">Age Range of Participants</option>
          <option value="18-24">18-24</option>
          <option value="25-34">25-34</option>
          <option value="35-44">35-44</option>
          <option value="45+">45+</option>
        </select>
        <div className="flex-center">
          <p>By booking a tour, you agree to our terms and conditions.</p>
          <p>Please ensure accurate information for a successful booking.</p>
        </div>
        <p>Please fill in all required fields.</p>
        <button type="submit" style={{ width: '100%' }}>Book Tour</button>
      </form>
    </section>
  );
}

export default BookFactoryTour;