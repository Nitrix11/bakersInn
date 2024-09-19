import React from 'react';

function RedCircle() {
  return (
    <div
      className="circle red-circle"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: 'red',
      }}
    />
  );
}
export default RedCircle