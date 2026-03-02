import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { styles } from './styles';

export default function ApiPractice(){
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({ id: null, title: '', body: '' });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    document.title = 'API Functionality';
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
      setItems(res.data);
    } catch (err) {
      setError('Failed to load data');
      Swal.fire('Error', 'API Get Failed', 'error');
    } finally { setLoading(false); }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (form.id) {
        await axios.put(`https://jsonplaceholder.typicode.com/posts/${form.id}`, form);
        setItems(items.map(i => i.id === form.id ? { ...form } : i));
        Swal.fire('Success', 'Update Successful', 'success');
      } else {
        const res = await axios.post('https://jsonplaceholder.typicode.com/posts', form);
        setItems([res.data, ...items]);
        Swal.fire('Success', 'Post Successful', 'success');
      }
      setForm({ id: null, title: '', body: '' });
      setShowForm(false);
    } catch (err) {
      Swal.fire('Error', 'Action failed', 'error');
    } finally { setLoading(false); }
  };

  const handleEdit = (item) => {
    setForm({ id: item.id, title: item.title, body: item.body || '' });
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: 'Delete item?',
      text: 'This will remove the item from the list (JSONPlaceholder will not persist).',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete',
    });

    if (!confirm.isConfirmed) return;

    setLoading(true);
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setItems(items.filter(i => i.id !== id));
      Swal.fire('Deleted', 'Item removed', 'success');
    } catch (err) {
      Swal.fire('Error', 'Delete failed', 'error');
    } finally { setLoading(false); }
  };

  return (
    <div style={styles.card}>
      <h2 style={{ color: '#0f172a', marginTop: 0, marginBottom: '30px', fontSize: '28px' }}>API Practice</h2>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <div />
        <button
          type="button"
          onClick={() => { setForm({ id: null, title: '', body: '' }); setShowForm(s => !s); }}
          style={{ ...styles.btnCalc, backgroundColor: '#06b6d4' }}
        >
          {showForm ? 'Hide Form' : 'Add New Post'}
        </button>
      </div>

      {(showForm || form.id) && (
        <form onSubmit={handleSubmit} style={{ marginBottom: '40px', padding: '20px', backgroundColor: '#f8fafc', borderRadius: '12px' }}>
          <h3 style={{ color: '#1e293b', marginTop: 0, fontSize: '18px', marginBottom: '16px' }}>{form.id ? 'Update Post' : 'Create Post'}</h3>
          <div style={{ backgroundColor: '#fbfdff', padding: '12px', borderRadius: '10px', border: '1px solid #e6eef8', marginBottom: '12px' }}>
            <input style={{...styles.input, marginBottom: 0, backgroundColor: '#ffffff', border: 'none'}} placeholder="Title" value={form.title} onChange={e => setForm({...form, title: e.target.value})} required />
          </div>
          <div style={{ backgroundColor: '#fbfdff', padding: '12px', borderRadius: '10px', border: '1px solid #e6eef8', marginBottom: '12px' }}>
            <textarea style={{...styles.input, height: '120px', fontFamily: 'inherit', marginBottom: 0, backgroundColor: '#ffffff', border: 'none'}} placeholder="Body" value={form.body} onChange={e => setForm({...form, body: e.target.value})} required />
          </div>
          <button style={{ ...styles.btnCalc, backgroundColor: '#10b981' }} type="submit">
            {loading ? (form.id ? 'Updating...' : 'Submitting...') : (form.id ? 'Update' : 'Submit')}
          </button>
          <button type="button" onClick={() => { setForm({ id: null, title: '', body: '' }); setShowForm(false); }} style={{ ...styles.btnReset, marginLeft: '10px' }}>Cancel</button>
        </form>
      )}

      {loading && <p style={{ color: '#3b82f6', fontSize: '16px', fontWeight: '600' }}>⏳ Loading server data...</p>}
      {error && <p style={{ color: '#ef4444', fontSize: '16px', fontWeight: '600' }}>⚠️ {error}</p>}

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>Title</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.id} style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
              <td style={styles.td}><strong>{item.id}</strong></td>
              <td style={styles.td}>{item.title}</td>
              <td style={{...styles.td, display: 'flex', gap: '8px', justifyContent: 'flex-end'}}>
                <button onClick={() => handleEdit(item)} style={{ ...styles.btnEdit }}>Edit</button>
                <button onClick={() => handleDelete(item.id)} style={{ ...styles.btnDelete }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
