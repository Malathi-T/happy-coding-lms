import { Link } from 'react-router-dom';
import GlassCard from './GlassCard.jsx';

function Hero() {
  return (
    <section className="page-container" style={{ minHeight: 'calc(100vh - 5rem)', display: 'flex', alignItems: 'center' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)', gap: '3rem', alignItems: 'center' }}>
        <div>
          <GlassCard className="glass-hover" style={{ padding: '1rem 1.25rem', marginBottom: '1.5rem' }}>
            <div style={{ fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.9 }}>
              Final Year CSE Project
            </div>
            <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>
              MERN stack LMS with glassmorphism UI
            </div>
          </GlassCard>

          <h1 style={{ fontSize: '3rem', lineHeight: 1.1, marginBottom: '1rem', fontWeight: 700 }}>
            Learn, build & ship with
            <span style={{ display: 'block', backgroundImage: 'linear-gradient(135deg,#22d3ee,#a855f7)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              Happy Coding LMS
            </span>
          </h1>
          <p style={{ maxWidth: '32rem', fontSize: '0.98rem', opacity: 0.8, marginBottom: '1.75rem' }}>
            A modern Udemy-style learning platform for your portfolio.
            Beautiful glass UI, full MERN stack and ready to deploy on Vercel.
          </p>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
            <Link to="/courses">
              <button className="btn-primary">
                Start Learning
              </button>
            </Link>
            <Link to="/dashboard">
              <button className="btn-outline">
                View Dashboard
              </button>
            </Link>
          </div>
          <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>
            Built with React, Node.js, MongoDB & JWT Auth.
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <GlassCard>
            <div style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '0.85rem', opacity: 0.8, marginBottom: '0.4rem' }}>Live preview</div>
              <div style={{ fontWeight: 600, marginBottom: '0.75rem' }}>Student dashboard snapshot</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: '0.75rem', fontSize: '0.8rem' }}>
                <GlassCard>
                  <div style={{ padding: '0.8rem' }}>
                    <div style={{ opacity: 0.7 }}>Courses</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 700 }}>12</div>
                  </div>
                </GlassCard>
                <GlassCard>
                  <div style={{ padding: '0.8rem' }}>
                    <div style={{ opacity: 0.7 }}>Progress</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 700 }}>68%</div>
                  </div>
                </GlassCard>
                <GlassCard>
                  <div style={{ padding: '0.8rem' }}>
                    <div style={{ opacity: 0.7 }}>Hours</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 700 }}>40+</div>
                  </div>
                </GlassCard>
              </div>
            </div>
          </GlassCard>

          <GlassCard>
            <div style={{ padding: '1.25rem', fontSize: '0.85rem', opacity: 0.85 }}>
              “Happy Coding LMS showcases my skills in full-stack development, UI design and deployment –
              perfect for final-year project evaluation.”
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

export default Hero;

