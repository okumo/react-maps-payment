import React, { useContext } from 'react';
import initialState from '../initialState';
import Products from '../components/Products';
import AppContext from '../context/AppContext';

const Home = () => {
  const context = useContext(AppContext);
  console.log(context);
  return (
    <>
      <Products products={initialState.products} />
    </>
  );
};
export default Home;
