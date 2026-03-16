import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-20">
      <div className="page-container" style={{ paddingTop: '1.25rem', paddingBottom: '0.75rem' }}>
        <div className="glass" style={{ padding: '0.75rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '999px',
              background: 'linear-gradient(135deg, #22d3ee, #4f46e5)'
            }}
            />
            <div>
              <div style={{ fontWeight: 700, letterSpacing: '0.04em', fontSize: '0.95rem' }}>HAPPY CODING</div>
              <div style={{ fontSize: '0.7rem', opacity: 0.8 }}>Glassmorphism LMS</div>
            </div>
          </Link>

          <nav style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', fontSize: '0.9rem' }}>
            <NavLink
              to="/courses"
              style={({ isActive }) => ({
                opacity: isActive ? 1 : 0.8,
                fontWeight: isActive ? 600 : 400
              })}
            >
              Courses
            </NavLink>
            <NavLink
              to="/dashboard"
              style={({ isActive }) => ({
                opacity: isActive ? 1 : 0.8,
                fontWeight: isActive ? 600 : 400
              })}
            >
              Dashboard
            </NavLink>
            <Link to="/login">
              <button className="btn-outline">Login</button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

