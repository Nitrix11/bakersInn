import red from'../assets/red.png'
import arrow from"../assets/Arrow 1.svg"
import blue from"../assets/blue.png"
import yellow from"../assets/yellow.png"
import React, { useState } from 'react';

function Tabs() {
  const [activeTab, setActiveTab] = useState('Bread');
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div>
        <h1 className='text-[#261B6C] font-bold text-center text-[40px] mt-[100px] mb-[50px]'>
        Baker’s Recipes
        </h1>
      <div  id='tabs' className="mt-[100px]">
        <button
          className={activeTab === 'Bread' ? 'active' : ''}
          onClick={() => setActiveTab('Bread')}
        >
          <span style={{ color: activeTab === 'Bread' ? '#261B6C' : 'grey' }}>
          Bread
          </span>
          {activeTab === 'Bread' && <div className="indicator" />}
        </button>
        <button
          className={activeTab === 'for-vegans' ? 'active' : ''}
          onClick={() => setActiveTab('for-vegans')}
        >
          <span style={{ color: activeTab === 'for-vegans' ? '#261B6C' : 'grey' }}>
          Meat Pies
          </span>
          {activeTab === 'for-vegans' && <div className="indicator" />}
        </button>
        <button
          className={activeTab === 'for-family' ? 'active' : ''}
          onClick={() => setActiveTab('for-family')}
        >
          <span style={{ color: activeTab === 'for-family' ? '#261B6C' : 'grey' }}>
          Scones
          </span>
          {activeTab === 'for-family' && <div className="indicator" />}
        </button>
        <button
          className={activeTab === 'for-kids' ? 'active' : ''}
          onClick={() => setActiveTab('for-kids')}
        >
          <span style={{ color: activeTab === 'for-kids' ? '#261B6C' : 'grey' }}>
          Donuts
          </span>
          {activeTab === 'for-kids' && <div className="indicator" />}
        </button>
      </div>
      <hr id='hr' />
      <div className="tab-content">
        
 {activeTab === 'Bread' && (
          <div>
           
            <div className="cards1">
              {cardsData.map((card, index) => (
                <div key={index} className="card text-center flex flex-col justify-center">
                  <img src={blue} alt={card.title} />
                  <h1 className='text-[#261B6C] w-[70%] flex justify-center flex-col text-center text-[27px] font-bold'>{card.titles}</h1>
                  <div className='flex justify-between'>
                    <div>
                    <p className='text-[#261B6C] text-center  text-[10px] '>{card.description1}</p>
                    <p className='text-[#261B6C]  text-center text-[10px]'>{card.description2}</p>
                  
                    </div>
                  
                    <button  onClick={() => {
                    setShowModal(true);
                    setSelectedCard(card);
                  }}>
               
                
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
 
      {activeTab === 'for-kids' && (
          <div>
            
            <div className="cards1">
              {cardsData.map((card, index) => (
                <div key={index} className="card">
                  <img src={blue} alt={card.title} />
                  <h1 className='text-[#261B6C] text-[32px] font-bold'>{card.title}</h1>
                  <div className='flex justify-between'>
                    <div>
                    <p className='text-[#261B6C] font-bold'>{card.description1}<span className='text-[#BA8F55] font-bold '>{card.brown}</span></p>
                    <p className='text-[#261B6C] font-bold'>{card.description2}<span className='text-[#BA8F55] font-bold '>{card.serves}</span></p>
                  
                    </div>
                  
                    <button className=' ' onClick={() => {
                    setShowModal(true);
                    setSelectedCard(card);
                  }}>
               
                
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
                  <img src={yellow} alt={card.title} />
                  <h1 className='text-[#261B6C] text-[32px] font-bold'>{card.titles}</h1>
                  <div className='flex justify-between'>
                    <div>
                    <p className='text-[#261B6C] font-bold'>{card.description1}<span className='text-[#BA8F55] font-bold '>{card.brown}</span></p>
                    <p className='text-[#261B6C] font-bold'>{card.description2}<span className='text-[#BA8F55] font-bold '>{card.serves}</span></p>
                  
                    </div>
                  
                    <button className='bg-[#BA8F55] rounded-[50%] w-[50px] ' onClick={() => {
                    setShowModal(true);
                    setSelectedCard(card);
                  }}>
               
                
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
                  <img src={red} alt={card.title} />
                  <h1 className='text-[#261B6C] text-[32px] font-bold'>{card.titles3}</h1>
                  <div className='flex justify-between'>
                    <div>
                    <p className='text-[#261B6C] font-bold'>{card.description1}<span className='text-[#BA8F55] font-bold '>{card.brown}</span></p>
                    <p className='text-[#261B6C] font-bold'>{card.description2}<span className='text-[#BA8F55] font-bold '>{card.serves}</span></p>
                  
                    </div>
                  
                    <button className='bg-[#BA8F55] rounded-[50%] w-[50px] ' onClick={() => {
                    setShowModal(true);
                    setSelectedCard(card);
                  }}>
               
                
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
      image: {blue},
      titles: 'Premium Soft White Loaf  ',
    //   titles:"Sweet Shortbread",
    //   titles3:"Salmon Strips",
    //   description1: 'Premium Soft White Loaf',
      description2: 'Our Premium Soft White loaves are delightfully soft, fresh and delicious. They are loaded with energy and fortified with vitamins and minerals for the classic everyday bread. The Standard Loaf has 18 slices.: ',
    

    },
    {      image: {red},
    title: 'Shwarma Sandwich',
    titles3:"Salmon Strips",
    titles:"Sweet Shortbread",
    description1: 'Prep Time:',
    description2: 'Serves: ',
    brown:"20 min",
    serves:"6 people"
    },
    {
        image: {yellow},
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