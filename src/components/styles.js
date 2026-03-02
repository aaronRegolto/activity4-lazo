export const styles = {
  nav: { backgroundColor: '#1a1a1a', padding: '1.2rem 2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)', position: 'sticky', top: 0, zIndex: 100 },
  navLinks: { display: 'flex', gap: '48px', alignItems: 'center' },
  link: { color: '#ffffff', textDecoration: 'none', fontWeight: '700', fontSize: '15px', padding: '8px 14px', borderRadius: '8px', transition: 'all 0.25s ease', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.5px' },
  navBtn: { backgroundColor: '#ffffff', color: '#1a1a1a', padding: '10px 24px', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: '700', fontSize: '14px', transition: 'all 0.3s ease', boxShadow: '0 4px 12px rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '0.5px', position: 'absolute', right: '30px' },
  container: { maxWidth: '1100px', margin: '48px auto', padding: '0 20px', fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial" },
  card: { backgroundColor: '#ffffff', padding: '28px', borderRadius: '12px', boxShadow: '0 6px 20px rgba(16,24,40,0.06)', marginBottom: '28px', border: '1px solid #eef2f7' },
  input: { width: '100%', padding: '12px', marginBottom: '12px', borderRadius: '10px', border: '1px solid #e6eef8', boxSizing: 'border-box', fontSize: '15px', transition: 'border-color 0.2s ease', backgroundColor: '#fbfdff' },
  btnCalc: { backgroundColor: '#2563eb', color: 'white', padding: '10px 22px', border: 'none', borderRadius: '10px', cursor: 'pointer', marginRight: '10px', fontWeight: '600', fontSize: '14px', boxShadow: '0 6px 18px rgba(37,99,235,0.12)', transition: 'transform 0.12s ease' },
  btnReset: { backgroundColor: 'transparent', color: '#374151', padding: '10px 20px', border: '1px solid #e6eef8', borderRadius: '10px', cursor: 'pointer', fontWeight: '600', fontSize: '14px', transition: 'all 0.2s ease' },
  btnEdit: { padding: '8px 14px', cursor: 'pointer', backgroundColor: 'transparent', color: '#2563eb', border: '1px solid #e6eef8', borderRadius: '8px', marginRight: '8px', fontWeight: '600', fontSize: '13px', transition: 'all 0.2s ease' },
  btnDelete: { padding: '8px 14px', cursor: 'pointer', backgroundColor: 'transparent', color: '#374151', border: '1px solid #e6eef8', borderRadius: '8px', fontWeight: '600', fontSize: '13px', transition: 'all 0.2s ease' },
  table: { width: '100%', borderCollapse: 'separate', borderSpacing: '0 10px', marginTop: '20px' },
  th: { textAlign: 'left', padding: '14px 18px', borderBottom: '1px solid #e6eef8', color: '#0f172a', fontWeight: '700', backgroundColor: 'transparent' },
  td: { padding: '16px 18px', borderBottom: 'none', backgroundColor: 'transparent' }
};
