import React from 'react';

function BakeryDepots() {
  return (
    <div className='grid place-items-center mb-[70px]'>
      <h1 className="text-[#261B6C] text-center text-[32px] font-bold">List of Bakery's in Depots</h1>
      <table>
        <thead>
          <tr>
            <th  className="text-[#261B6C] ">Depot</th>
            <th className="text-[#261B6C] " style={{ borderLeft: '1px solid #261B6C' }}>Address</th>
            <th className="text-[#261B6C] " style={{ borderLeft: '1px solid #261B6C' }}>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-[#261B6C] font-bold ">Chinhoyi Depot</td>
            <td  className="text-[#261B6C]" style={{ borderLeft: '1px solid #261B6C' }}>94/95 Josiah Tongogara St, Industrial Site, Chinhoyi</td>
            <td  className="text-[#261B6C] font-bold " style={{ borderLeft: '1px solid #261B6C' }}>0772 318 309</td>
          </tr>
          <tr>
            <td className="text-[#261B6C] font-bold ">Bindura Depot</td>
            <td  className="text-[#261B6C]" style={{ borderLeft: '1px solid #261B6C' }}>461 Luton Road, Industrial Site, Bindura</td>
            <td  className="text-[#261B6C] font-bold " style={{ borderLeft: '1px solid #261B6C' }}>066 2107317</td>
          </tr>
          <tr>
            <td className="text-[#261B6C] font-bold ">Murehwa Depot</td>
            <td  className="text-[#261B6C]" style={{ borderLeft: '1px solid #261B6C' }}>Stand number 351 Murehwa Growth Point</td>
            <td  className="text-[#261B6C] font-bold " style={{ borderLeft: '1px solid #261B6C' }}>0652 122 514</td>
          </tr>
          <tr>
            <td className="text-[#261B6C] font-bold ">Mutare Depot</td>
            <td  className="text-[#261B6C]" style={{ borderLeft: '1px solid #261B6C' }}>5-7 Glasgow Road, Industrial Site, Mutare</td>
            <td  className="text-[#261B6C] font-bold " style={{ borderLeft: '1px solid #261B6C' }}>020 60715</td>
          </tr>
          <tr>
            <td className="text-[#261B6C] font-bold ">Hwange Depot</td>
            <td   className="text-[#261B6C]" style={{ borderLeft: '1px solid #261B6C' }}>29 Derby Drive, Hwange Industrial Site</td>
            <td  className="text-[#261B6C] font-bold " style={{ borderLeft: '1px solid #261B6C' }}>0281 2820105</td>
          </tr>
          <tr>
            <td className="text-[#261B6C] font-bold ">Chiredzi Depot</td>
            <td  className="text-[#261B6C]" style={{ borderLeft: '1px solid #261B6C' }}>329 Lion Drive, Chiredzi</td>
            <td  className="text-[#261B6C] font-bold " style={{ borderLeft: '1px solid #261B6C' }}>0231 231 2709</td>
          </tr>
     
          <tr>
            <td className="text-[#261B6C] font-bold ">Murehwa Depot</td>
            <td className="text-[#261B6C] " style={{ borderLeft: '1px solid #261B6C' }}>1310 Mineral Road, Masvingo</td>
            <td className="text-[#261B6C] font-bold " style={{ borderLeft: '1px solid #261B6C' }}>0652 122 514</td>
          </tr>
          <tr>
            <td className="text-[#261B6C] font-bold ">Masvingo Depot</td>
            <td className="text-[#261B6C] " style={{ borderLeft: '1px solid #261B6C' }}>Stand number 351 Murehwa Growth Point</td>
            <td className="text-[#261B6C] font-bold " style={{ borderLeft: '1px solid #261B6C' }}>039 266 333</td>
          </tr>
          <tr>
            <td className="text-[#261B6C] font-bold ">Gweru Depot</td>
            <td className="text-[#261B6C] " style={{ borderLeft: '1px solid #261B6C' }}>1843 Main Street, Gweru</td>
            <td className="text-[#261B6C] font-bold " style={{ borderLeft: '1px solid #261B6C' }}>054 2220 858</td>
          </tr>
          <tr>
            <td className="text-[#261B6C] font-bold ">Zvishavane Depot</td>
            <td className="text-[#261B6C] " style={{ borderLeft: '1px solid #261B6C' }}>Shabanie Mine Club, Noelville, Zvishavane</td>
            <td className="text-[#261B6C] font-bold " style={{ borderLeft: '1px solid #261B6C' }}>0772 395567</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BakeryDepots;