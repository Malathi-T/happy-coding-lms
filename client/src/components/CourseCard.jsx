import GlassCard from './GlassCard.jsx';

function CourseCard({ title, price, rating, level }) {
  return (
    <GlassCard className="glass-hover">
      <div style={{ padding: '1.25rem' }}>
        <div style={{ fontSize: '0.8rem', opacity: 0.75, marginBottom: '0.3rem' }}>{level}</div>
        <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', fontWeight: 600 }}>{title}</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
          <div style={{ fontSize: '0.85rem', opacity: 0.9 }}>
            ⭐ {rating.toFixed(1)}
          </div>
          <div style={{ fontWeight: 600 }}>₹{price}</div>
        </div>
      </div>
    </GlassCard>
  );
}

export default CourseCard;

