import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Courses from './pages/Courses.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';

function App() {
  return (
    <div className="min-h-screen text-white">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <main className="pt-24">
              <Hero />
            </main>
          }
        />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;

