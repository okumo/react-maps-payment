import React, { useContext } from 'react';
import Map from '../components/Map';
import AppContext from '../context/AppContext';
import useGoogleAddress from '../hooks/useGoogleAddress';
import '../styles/components/Success.css';

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  const location = useGoogleAddress(buyer[0].address);
  console.log(state);
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer[0].name}, gracias por tu compra`}</h2>
        <span>Tu pedido llegará en 3 días a tu dirección</span>
        <div className="Success-map">
          <Map data={location} />
        </div>
      </div>
    </div>
  );
};
export default Success;
