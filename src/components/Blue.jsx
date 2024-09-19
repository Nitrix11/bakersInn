import React from 'react';

function BlueCircle() {
  return (
    <div
      className="circle blue-circle"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: 'blue',
      }}
    />
  );
}
export default BlueCircle