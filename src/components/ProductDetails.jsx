import React, { useState } from 'react';
import { styles } from './styles';

export default function ProductDetails({ onCalculate, onReset }){
  const [formData, setFormData] = useState({ name: '', qty: '', price: '' });

  const handleReset = () => {
    setFormData({ name: '', qty: '', price: '' });
    onReset();
  };

  return (
    <div style={styles.card}>
      <h3 style={{ color: '#0f172a', marginBottom: '24px', fontSize: '18px', fontWeight: '700' }}>Enter Product Details</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div style={{ backgroundColor: '#fbfdff', padding: '14px', borderRadius: '10px', border: '1px solid #e6eef8' }}>
          <label style={{ fontSize: '13px', fontWeight: '600', color: '#475569', display: 'block', marginBottom: '8px' }}>Product Name</label>
          <input style={{...styles.input, marginBottom: 0, backgroundColor: '#ffffff'}} type="text" placeholder="Enter product name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
        </div>
        <div style={{ backgroundColor: '#fbfdff', padding: '14px', borderRadius: '10px', border: '1px solid #e6eef8' }}>
          <label style={{ fontSize: '13px', fontWeight: '600', color: '#475569', display: 'block', marginBottom: '8px' }}>Quantity</label>
          <input style={{...styles.input, marginBottom: 0, backgroundColor: '#ffffff'}} type="number" placeholder="Enter quantity" value={formData.qty} onChange={e => setFormData({...formData, qty: e.target.value})} />
        </div>
        <div style={{ backgroundColor: '#fbfdff', padding: '14px', borderRadius: '10px', border: '1px solid #e6eef8' }}>
          <label style={{ fontSize: '13px', fontWeight: '600', color: '#475569', display: 'block', marginBottom: '8px' }}>Unit Price</label>
          <input style={{...styles.input, marginBottom: 0, backgroundColor: '#ffffff'}} type="number" placeholder="Enter unit price" value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} />
        </div>
      </div>
      <div style={{ marginTop: '24px', display: 'flex', gap: '10px' }}>
        <button style={styles.btnCalc} onClick={() => onCalculate({...formData, total: formData.qty * formData.price})}>Calculate</button>
        <button style={styles.btnReset} onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
