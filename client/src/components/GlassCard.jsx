/* Reusable glassmorphism container */
function GlassCard({ children, className = '' }) {
  return (
    <div className={`glass glass-hover ${className}`}>
      {children}
    </div>
  );
}

export default GlassCard;

