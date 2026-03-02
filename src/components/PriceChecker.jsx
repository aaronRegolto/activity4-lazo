import React, { useState, useEffect } from 'react';
import ProductDetails from './ProductDetails';
import BillingDetails from './BillingDetails';
import { styles } from './styles';

export default function PriceChecker(){
  const [bill, setBill] = useState(null);
  useEffect(() => { document.title = 'Price Checker'; }, []);

  return (
    <div>
      <ProductDetails onCalculate={setBill} onReset={() => setBill(null)} />
      {bill && <div style={{ marginTop: '20px' }}><BillingDetails data={bill} /></div>}
    </div>
  );
}
