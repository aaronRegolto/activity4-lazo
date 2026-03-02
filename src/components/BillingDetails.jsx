import React from 'react';
import { styles } from './styles';

export default function BillingDetails({ data }){
  return (
    <div style={{ ...styles.card, borderLeft: '6px solid #10b981', backgroundColor: '#f0fdf4' }}>
      <h3 style={{ marginTop: 0, color: '#065f46', marginBottom: '20px', fontSize: '24px' }}>Billing Summary</h3>
      <div style={{ backgroundColor: '#e0f7f0', padding: '16px', borderRadius: '10px', border: '1px solid #d1fae5', marginBottom: '16px' }}>
        <p style={{ fontSize: '15px', color: '#047857', marginBottom: '10px', margin: 0 }}><strong>Product Name:</strong> {data.name}</p>
        <p style={{ fontSize: '15px', color: '#047857', marginBottom: '10px', margin: 0 }}><strong>Quantity:</strong> {data.qty}</p>
        <p style={{ fontSize: '15px', color: '#047857', marginBottom: 0 }}><strong>Unit Price:</strong> ₱{data.price}</p>
      </div>
      <div style={{ backgroundColor: '#d0f5ed', padding: '20px', borderRadius: '10px', border: '1px solid #a7f3d0', marginTop: '16px' }}>
        <h2 style={{ color: '#047857', marginTop: 0, marginBottom: 0, fontSize: '28px' }}>Total: ₱{(parseFloat(data.qty) * parseFloat(data.price)).toFixed(2)}</h2>
      </div>
    </div>
  );
}
