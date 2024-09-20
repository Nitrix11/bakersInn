import shwarma from'../assets/Rectangle 3377.png'
import arrow from"../assets/Arrow 1.svg"
import shortbread from"../assets/shortbread.png"
import chips from"../assets/Rectangle 337.png"
import React, { useState } from 'react';

function Tabs() {
  const [activeTab, setActiveTab] = useState('for-kids');
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div>
        <h1 className='text-[#261B6C] font-bold text-center text-[40px] mt-[100px] mb-[50px]'>
        Baker’s Recipes
        </h1>
      <div id='tabs' className="mt-[100px]">
        <button
          className={activeTab === 'for-kids' ? 'active' : ''}
          onClick={() => setActiveTab('for-kids')}
        >
          <span style={{ color: activeTab === 'for-kids' ? '#261B6C' : 'grey' }}>
            For Kids
          </span>
          {activeTab === 'for-kids' && <div className="indicator" />}
        </button>
        <button
          className={activeTab === 'for-vegans' ? 'active' : ''}
          onClick={() => setActiveTab('for-vegans')}
        >
          <span style={{ color: activeTab === 'for-vegans' ? '#261B6C' : 'grey' }}>
            For Vegans
          </span>
          {activeTab === 'for-vegans' && <div className="indicator" />}
        </button>
        <button
          className={activeTab === 'for-family' ? 'active' : ''}
          onClick={() => setActiveTab('for-family')}
        >
          <span style={{ color: activeTab === 'for-family' ? '#261B6C' : 'grey' }}>
            For Family
          </span>
          {activeTab === 'for-family' && <div className="indicator" />}
        </button>
      </div>
      <hr id='hr' />
      <div className="tab-content">
      {activeTab === 'for-kids' && (
          <div>
            
            <div className="cards1">
              {cardsData.map((card, index) => (
                <div key={index} className="card">
                  <img src={shwarma} alt={card.title} />
                  <h1 className='text-[#261B6C] text-[32px] font-bold'>{card.title}</h1>
                  <div className='flex justify-between'>
                    <div>
                    <p className='text-[#261B6C] font-bold'>{card.description1}<span className='text-[#BA8F55] font-bold '>{card.brown}</span></p>
                    <p className='text-[#261B6C] font-bold'>{card.description2}<span className='text-[#BA8F55] font-bold '>{card.serves}</span></p>
                  
                    </div>
                  
                    <button id='popup-arrow' className='bg-[#BA8F55] rounded-[50%] w-[50px] ' onClick={() => {
                    setShowModal(true);
                    setSelectedCard(card);
                  }}>
               
                →
                  </button>
                  </div>
                 
                </div>
              ))}
            </div>
            {showModal && (
              <div className="modal">
                <div className="modal-content">
                  <span className="close" onClick={() => setShowModal(false)}>
                    &times;
                  </span>
                  <h2>{selectedCard.title}</h2>
                  <p>{selectedCard.description1}</p>
                  <p>{selectedCard.description2}</p>
                </div>
              </div>
            )}
          </div>
        )}
      {activeTab === 'for-vegans' && (
          <div>
     
            <div className="cards1">
              {cardsData.map((card, index) => (
                <div key={index} className="card">
                  <img src={shortbread} alt={card.title} />
                  <h1 className='text-[#261B6C] text-[32px] font-bold'>{card.titles}</h1>
                  <div className='flex justify-between'>
                    <div>
                    <p className='text-[#261B6C] font-bold'>{card.description1}<span className='text-[#BA8F55] font-bold '>{card.brown}</span></p>
                    <p className='text-[#261B6C] font-bold'>{card.description2}<span className='text-[#BA8F55] font-bold '>{card.serves}</span></p>
                  
                    </div>
                  
                    <button id='popup-arrow' className='bg-[#BA8F55] rounded-[50%] w-[50px] ' onClick={() => {
                    setShowModal(true);
                    setSelectedCard(card);
                  }}>
               →
                
                  </button>
                  </div>
                 
                </div>
              ))}
            </div>
            {showModal && (
              <div className="modal">
                <div className="modal-content">
                  <span className="close" onClick={() => setShowModal(false)}>
                    &times;
                  </span>
                  <h2>{selectedCard.title2}</h2>
                  <p>{selectedCard.description1}</p>
                  <p>{selectedCard.description2}</p>
                </div>
              </div>
            )}
          </div>
        )}
 
 {activeTab === 'for-family' && (
          <div>
           
            <div className="cards1">
              {cardsData.map((card, index) => (
                <div key={index} className="card">
                  <img src={chips} alt={card.title} />
                  <h1 className='text-[#261B6C] text-[32px] font-bold'>{card.titles3}</h1>
                  <div className='flex justify-between'>
                    <div>
                    <p className='text-[#261B6C] font-bold'>{card.description1}<span className='text-[#BA8F55] font-bold '>{card.brown}</span></p>
                    <p className='text-[#261B6C] font-bold'>{card.description2}<span className='text-[#BA8F55] font-bold '>{card.serves}</span></p>
                  
                    </div>
                  
                    <button id='popup-arrow' className='bg-[#BA8F55] rounded-[50%] w-[50px] ' onClick={() => {
                    setShowModal(true);
                    setSelectedCard(card);
                  }}>
               →
                
                  </button>
                  </div>
                 
                </div>
              ))}
            </div>
            {showModal && (
              <div className="modal">
                <div className="modal-content">
                  <span className="close" onClick={() => setShowModal(false)}>
                    &times;
                  </span>
                  <h2>{selectedCard.title2}</h2>
                  <p>{selectedCard.description1}</p>
                  <p>{selectedCard.description2}</p>
                </div>
              </div>
            )}
          </div>
        )}
 
      </div>
    </div>
  );
}

const cardsData = [
    {
      image: {shwarma},
      title: 'Shwarma Sandwich',
      titles:"Sweet Shortbread",
      titles3:"Salmon Strips",
      description1: 'Prep Time:',
      description2: 'Serves: ',
      brown:"20 min",
      serves:"6 people"
    },
    {      image: {shwarma},
    title: 'Shwarma Sandwich',
    titles3:"Salmon Strips",
    titles:"Sweet Shortbread",
    description1: 'Prep Time:',
    description2: 'Serves: ',
    brown:"20 min",
    serves:"6 people"
    },
    {
        image: {shwarma},
        titles:"Sweet Shortbread",
        titles3:"Salmon Strips",
        title: 'Shwarma Sandwich',
        description1: 'Prep Time:',
        description2: 'Serves: ',
        brown:"20 min",
        serves:"6 people"
    },
  ];
  
  export default Tabs;