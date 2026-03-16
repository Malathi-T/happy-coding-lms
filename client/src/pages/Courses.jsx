import { useEffect, useState } from 'react';
import axios from 'axios';
import CourseCard from '../components/CourseCard.jsx';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_BASE}/courses`)
      .then((res) => setCourses(res.data))
      .catch(() => {
        // fallback demo courses if backend not running
        setCourses([
          { _id: '1', title: 'MERN Stack Mastery', price: 999, rating: 4.8, level: 'Intermediate' },
          { _id: '2', title: 'Data Structures & Algorithms', price: 799, rating: 4.7, level: 'Beginner' },
          { _id: '3', title: 'System Design for Interviews', price: 899, rating: 4.9, level: 'Advanced' }
        ]);
      });
  }, []);

  return (
    <main className="page-container" style={{ paddingTop: '6rem' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Browse Courses</h2>
        <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
          Curated courses to showcase in your final-year LMS project.
        </p>
      </header>
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '1.5rem'
        }}
      >
        {courses.map((course) => (
          <CourseCard key={course._id} {...course} />
        ))}
      </section>
    </main>
  );
}

export default Courses;

