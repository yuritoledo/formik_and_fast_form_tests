import React from 'react';
import Customer from './Pages/CustomerFast/Customer';
import CustomerFormik from './Pages/CustomerFormik/PersonalData/PersonalDataFormik';

const App: React.FC = () => {
  return (
    <>
      <Customer />
      <CustomerFormik />
    </>
  );
}

export default App;
