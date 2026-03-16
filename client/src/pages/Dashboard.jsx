import { useEffect, useState } from 'react';
import GlassCard from '../components/GlassCard.jsx';

function Dashboard() {
  const [stats, setStats] = useState({
    enrolled: 5,
    completed: 2,
    progress: 45
  });

  useEffect(() => {
    // Here you could fetch real dashboard stats using the token from localStorage
  }, []);

  return (
    <main className="page-container" style={{ paddingTop: '6rem' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Student Dashboard</h2>
        <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
          Track your learning progress across all Happy Coding courses.
        </p>
      </header>
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}
      >
        <GlassCard>
          <div style={{ padding: '1.25rem' }}>
            <div style={{ fontSize: '0.85rem', opacity: 0.8 }}>Courses enrolled</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 700 }}>{stats.enrolled}</div>
          </div>
        </GlassCard>
        <GlassCard>
          <div style={{ padding: '1.25rem' }}>
            <div style={{ fontSize: '0.85rem', opacity: 0.8 }}>Courses completed</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 700 }}>{stats.completed}</div>
          </div>
        </GlassCard>
        <GlassCard>
          <div style={{ padding: '1.25rem' }}>
            <div style={{ fontSize: '0.85rem', opacity: 0.8 }}>Overall progress</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 700 }}>{stats.progress}%</div>
            <div
              style={{
                marginTop: '0.6rem',
                height: '6px',
                borderRadius: '999px',
                background: 'rgba(15,23,42,0.8)',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  width: `${stats.progress}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg,#22d3ee,#4f46e5)'
                }}
              />
            </div>
          </div>
        </GlassCard>
      </section>
      <GlassCard>
        <div style={{ padding: '1.5rem', fontSize: '0.9rem', opacity: 0.85 }}>
          This dashboard can be extended with:
          <ul style={{ marginTop: '0.5rem', paddingLeft: '1.2rem' }}>
            <li>Per-course progress tracking</li>
            <li>Upcoming lessons and deadlines</li>
            <li>Certificates and achievements</li>
          </ul>
        </div>
      </GlassCard>
    </main>
  );
}

export default Dashboard;

