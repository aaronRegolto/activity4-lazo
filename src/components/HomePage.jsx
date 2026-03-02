import React, { useEffect } from 'react';
import { styles } from './styles';

export default function HomePage(){
  useEffect(() => { document.title = 'Home'; }, []);
  return (
    <div style={styles.card}>
      <h1 style={{ color: '#0f172a', marginTop: 0, marginBottom: '20px', fontSize: '32px' }}>React Fundamentals</h1>
      <ul style={{ lineHeight: '2', color: '#475569', fontSize: '16px' }}>
        <li><strong>Conditional Rendering:</strong> Executing logic to show/hide UI (e.g., BillingDetails only appearing after calculation).</li>
        <li style={{ marginTop: '12px' }}><strong>UseEffects:</strong> Handling side effects like API calls and updating <code>document.title</code>.</li>
        <li style={{ marginTop: '12px' }}><strong>Routing:</strong> Navigating between pages using <code>BrowserRouter</code>, <code>Routes</code>, and <code>Link</code>.</li>
      </ul>
    </div>
  );
}
