
import React, { useState } from 'react';


const RequestCallbackForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    phoneNumber: '',
    email: '',
    areaOfInterest: '',
    natureOfEnquiry: '',
    contactByPhone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle form submission logic here
  };

  return (
    <div className="callback-form">
      <h1 className="text-[#261B6C] text-center text-[32px] font-bold">Request A Callback</h1>
      <p className="text-[#261B6C] text-center ">Complete the form below and we will respond within 24 hours</p>
      <form onSubmit={handleSubmit}>
        <div className="flex-inputs">
          <select name="title" onChange={handleChange} required>
            <option value="" disabled selected>Your Title</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
          </select>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex-inputs">
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Your Phone Number"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
            required
          />
        </div>

        <select name="areaOfInterest" onChange={handleChange} className="full-width" required>
          <option value="" disabled selected>Select Area of Interest</option>
          <option value="general">General Inquiry</option>
          <option value="support">Support</option>
          <option value="sales">Sales</option>
        </select>

        <select name="natureOfEnquiry" onChange={handleChange} className="full-width" required>
          <option value="" disabled selected>Select Nature of Enquiry</option>
          <option value="question">Question</option>
          <option value="feedback">Feedback</option>
          <option value="complaint">Complaint</option>
        </select>

        <select name="contactByPhone" onChange={handleChange} className="full-width" required>
          <option value="" disabled selected>Contact by Phone?</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <textarea
          name="message"
          placeholder="Your Message"
          onChange={handleChange}
          className="full-width"
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RequestCallbackForm;