import React from 'react';

import teamwork from "../assets/teamwork.png";
import respect from "../assets/respect.png";
import integrity from "../assets/intergrity.png";
import commitment from "../assets/commitment.png";
import excellence from "../assets/donutss.png";
import CardCore from"../components/CardCore"
import Ceo from"../components/Ceo"

const values = [
  {
    title: "Teamwork",
    description: "We set inspiring goals that we pursue with passion, unity and focus. We support each other, build on our strengths and ensure that every player in our team contributes fully. We play to win and realise that synergy, communication and alignment bind us together.",
    image: [teamwork],
  },
  {
    title: "Respect",
    description: "We build self-esteem by treating each other fairly, communicating directly and respectfully. We have empathy, discipline and build on our diversity as a source of strength, creativity and innovation.",
    image: [respect],
  },
  {
    title: "Integrity",
    description: "We uphold the highest professional and ethical standards. We guard the reputation of our brands. Our promises are bankable.",
    image: [integrity],
  },
//   {
//     title: "Commitment",
//     description: "We are accountable to our stakeholders and commit to deliver what we promise. We translate plans into actions; strategies into achievements and tangible returns.",
//     image: [commitment],
//   },
//   {
//     title: "Excellence",
//     description: "We strive to be the best in our business. We improve all the time, in all aspects and passionately deliver at the highest level. We offer superior value and present our offering with pride.",
//     image: [excellence],
//   },
];

const CoreValues = () => {
  return (
    <section className="core-values">
      <h2>Our Core Values</h2>
      <div className="values-grid">
        {values.map((value, index) => (
          <div className="value-box" key={index}>
            <img src={value.image} alt={value.title} />
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </div>
        ))}
 
      </div>
      <div>
        <div className='flex gap-[50px]  items-center justify-center mt-[50px]'> 
        <CardCore title="Commitment" description="We are accountable to our stakeholders and commit to deliver what we promise. We translate plans into actions; strategies into achievements and tangible returns." image={commitment} />
     <CardCore title="Excellence" description="We strive to be the best in our business. We improve all the time, in all aspects and passionately deliver at the highest level. We offer superior value and present our offering with pride." image={excellence}/>
        </div>
        <Ceo/>
    
      </div>
    </section>
  );
};

export default CoreValues;
