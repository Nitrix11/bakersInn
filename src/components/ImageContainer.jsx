import React, { useState, useEffect } from 'react';
import RedCircle from '../components/Red';
import BlueCircle from '../components/Blue';
import Overlay from '../components/Overlay';

function ImageComponent({ image }) {
    const [active, setActive] = useState(false);
    const [circlePosition, setCirclePosition] = useState({ left: '50%' });
    const [redCircleColor, setRedCircleColor] = useState('red');
  
    useEffect(() => {
      const interval = setInterval(() => {
        setActive(!active);
        setCirclePosition({
          left: active ? '40%' : '60%',
        });
        if (!active) {
          setRedCircleColor('white');
          setTimeout(() => setRedCircleColor('red'), 1000);
        }
      }, 3000);
  
      return () => clearInterval(interval);
    }, [active]);
  
    return (
      <div
        style={{
          position: 'relative',
          width: '50%',
          height: '200px',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {active && (
          <React.Fragment>
            <RedCircle
              style={{
                left: circlePosition.left,
                transition: 'left 2s',
                backgroundColor: redCircleColor,
                zIndex: redCircleColor === 'white' ? -1 : 1,
              }}
            />
            <BlueCircle
              style={{
                left: circlePosition.left,
                transition: 'left 2s',
              }}
            />
          </React.Fragment>
        )}
        {!active && <Overlay />}
      </div>
    );
  }
export default ImageComponent