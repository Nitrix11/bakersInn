import React from 'react';
import ceo from "../assets/ceo.png";
import ngoni from"../assets/ngoni.png"

const Ceo = () => {
  return (
    
    <div className='promise'>
      <div className="image"><img src={ceo} alt="" /></div>
      <div className="text-box">
<h1 className='text-[#261B6C] font-bold text-left text-[22px]'>PROMISE OF QUALITY</h1>
<p className='text-[15px]'>Thank you for visiting our websites. At Baker's Inn, we are committed ba delivering quality premium bread to our customers. We work with a team of over 1500 employees nationwide. Our aim is 10 uphold the highest ethical standards and perpetuate excellence in the delivery of our products. For us at Blaker's Inn, we aim to inprove the accessibility of our bread. We are accountable to our stakehaiders to deliver what we promian</p>
<p className='text-[15px]'>We translate-plans into actions dreams into reality, strategies into achievements arid tangible returns. We strive to the the best in our business and in our partnerships. We are committed to every retail outlet, tuckshop, vendor and consumer in Zimbabwe who stock or consume our nourishing bread throughout Zimbabwe. We have built our top-quality brand and continue to grow as a company because of you. Thank you for your continued support of our brand</p>
<p className='text-[15px]'>We set inspiring goals that we pursue with passion, unity and focus. We support each other, build on our strengths and ensure that every player in our team contributes fully. We play to win and realise that synergy, communication and alignment bind us together</p>
<p className='flex justify-center mt-[50px]'>
    <img src={ngoni} className='w-[45%]' alt="" />
</p>
      </div>
    </div>
  )
}

export default Ceo
