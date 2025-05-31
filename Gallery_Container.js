//App.js
import React, { useState } from 'react';
import StudentsGalleryContainer from './containers/StudentsGalleryContainer';
import TeachersGalleryContainer from './containers/TeachersGalleryContainer';

const styles = {
  container: {
    background: '#111',
    minHeight: '100vh',
    padding: '2rem',
    color: '#00ffea',
    fontFamily: "'Orbitron', sans-serif",
  },
  toggleButtons: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1rem',
    gap: '1rem',
  },
  toggleButton: {
    padding: '0.5rem 1rem',
    backgroundColor: '#00ffea',
    border: 'none',
    borderRadius: '4px',
    color: '#000',
    cursor: 'pointer',
    fontWeight: '700',
    fontSize: '1rem',
  },
  activeButton: {
    backgroundColor: '#00b3a3',
  },
};

function App() {
  const [activeGallery, setActiveGallery] = useState('students');

  return (
    <div style={styles.container}>
      <div style={styles.toggleButtons}>
        <button
          style={{
            ...styles.toggleButton,
            ...(activeGallery === 'students' ? styles.activeButton : {}),
          }}
          onClick={() => setActiveGallery('students')}
        >
          Students Gallery
        </button>
        <button
          style={{
            ...styles.toggleButton,
            ...(activeGallery === 'teachers' ? styles.activeButton : {}),
          }}
          onClick={() => setActiveGallery('teachers')}
        >
          Teachers Gallery
        </button>
      </div>
      {activeGallery === 'students' && <StudentsGalleryContainer />}
      {activeGallery === 'teachers' && <TeachersGalleryContainer />}
    </div>
  );
}

export default App;


//StudentGallery.js
import React from 'react';

const cardStyle = {
  width: '180px',
  borderRadius: '12px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  overflow: 'hidden',
  textAlign: 'center',
  backgroundColor: '#222',
  color: '#00ffea',
  cursor: 'pointer',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
};

const imageStyle = {
  width: '100%',
  height: '180px',
  objectFit: 'cover',
  display: 'block',
};

const nameStyle = {
  padding: '0.5rem 0',
  fontWeight: '600',
};

const StudentGallery = ({ students }) => {
  return (
    <div>
      <h2>Students Gallery</h2>
      <div style={{ padding: '1rem', backgroundColor: '#111', borderRadius: '12px' }}>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {students.map(student => (
            <div
              key={student.id}
              style={cardStyle}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,255,234,0.6)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
              }}
            >
              <img src={student.imageUrl} alt={student.name} style={imageStyle} />
              <p style={nameStyle}>{student.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentGallery;


//StudentGalleryContainer.js
import React from 'react';
import StudentGallery from '../components/StudentGallery';

const students = [
  { id: 1, name: 'Xu Kai', imageUrl: 'https://i.pinimg.com/originals/e2/a8/97/e2a89736bcc549583cbd1c561de6cf9d.jpg' },
  { id: 2, name: 'Chen zhe yuan', imageUrl: 'https://wallpaperaccess.com/full/11996894.jpg' },
  { id: 3, name: 'Cha eun woo', imageUrl: 'https://i.pinimg.com/236x/02/09/d8/0209d86b2bbadf5d4597b3b04daa3f2c.jpg' },
  { id: 4, name: 'Linyi', imageUrl: 'https://i.pinimg.com/originals/7a/80/66/7a806674d3977752b6c7a5c6183284e1.jpg' },
  { id: 5, name: 'Zhang Zhehan', imageUrl: 'https://vignette.wikia.nocookie.net/drama/images/f/f5/Zhang_Zhe_Han-12.jpeg/revision/latest?cb=20180702011949&path-prefix=es' },
  { id: 6, name: 'Wang Yibo', imageUrl: 'https://i.pinimg.com/originals/29/fb/79/29fb79f01e25d41de2a032f9c0787048.jpg' },
  { id: 7, name: 'Li Xian', imageUrl: 'https://image.tmdb.org/t/p/original/lCi2P54yo765yBPniqcZOP3Hd4V.jpg' },
  { id: 8, name: 'Zhou Dongyu', imageUrl: 'https://i.pinimg.com/originals/4f/83/f3/4f83f3631455d36c5f9e6a02ad9d17e3.jpg' },
  { id: 9, name: 'Yang Zi', imageUrl: 'https://i0.wp.com/www.globalgranary.life/wp-content/uploads/2018/08/Yang-zi-e1690449163509.jpeg?resize=768%2C1219&ssl=1' },
  { id: 10, name: 'Dilraba Dilmurat', imageUrl: 'https://e1.pxfuel.com/desktop-wallpaper/566/254/desktop-wallpaper-result-for-dilraba-dilmurat-gif-dilraba-dilmurat.jpg' },
];

const StudentsGalleryContainer = () => {
  // Here you could fetch or manage students data if needed
  return (
    <div>
      <StudentGallery students={students} />
    </div>
  );
};

export default StudentsGalleryContainer;


//TeacherGallery.js
import React from 'react';

const cardStyle = {
  width: '180px',
  borderRadius: '12px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  overflow: 'hidden',
  textAlign: 'center',
  backgroundColor: '#222',
  color: '#00ffea',
  cursor: 'pointer',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
};

const imageStyle = {
  width: '100%',
  height: '180px',
  objectFit: 'cover',
  display: 'block',
};

const nameStyle = {
  padding: '0.5rem 0',
  fontWeight: '600',
};

const TeacherGallery = ({ teachers }) => {
  return (
    <div>
      <h2>Teachers Gallery</h2>
      <div style={{ padding: '1rem', backgroundColor: '#111', borderRadius: '12px' }}>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {teachers.map(teacher => (
            <div
              key={teacher.id}
              style={cardStyle}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,255,234,0.6)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
              }}
            >
              <img src={teacher.imageUrl} alt={teacher.name} style={imageStyle} />
              <p style={nameStyle}>{teacher.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherGallery;


//TeacherGalleryContainer.js
import React from 'react';
import TeacherGallery from '../components/TeacherGallery';

const teachers = [
  { id: 1, name: 'Lisa', imageUrl: 'https://i.pinimg.com/originals/5f/c9/26/5fc926d0ff806a2aa7458ce4245c50c9.jpg' },
  { id: 2, name: 'Jisoo', imageUrl: 'https://www.koreaboo.com/wp-content/uploads/2017/01/blackpink-jisoo-2.jpg' },
  { id: 3, name: 'Rose', imageUrl: 'https://cdn-2.tstatic.net/tribunnews/foto/bank/originals/rose-blackpink-asdfghn.jpg' },
  { id: 4, name: 'Jennie', imageUrl: 'https://superstarsbio.com/wp-content/uploads/2022/01/Jennie-age-765x1024.jpg' },
  { id: 5, name: 'Aria', imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.D0wWnG2ShG_P6fJnO76oYwHaLG&pid=Api&P=0&h=180' },
  { id: 6, name: 'Nayeon', imageUrl: 'http://images6.fanpop.com/image/articles/269000/nayeon-twice_269491_top_full.jpg?cache=1544662095' },
  { id: 7, name: 'Momo', imageUrl: 'https://i.mydramalist.com/kJm3wf.jpg' },
  { id: 8, name: 'Jihyo', imageUrl: 'https://i.pinimg.com/originals/18/09/8e/18098e1625370f3527218c3fa1c8634c.jpg' },
  { id: 9, name: 'Tzuyu', imageUrl: 'https://rare-gallery.com/uploads/posts/328116-Tzuyu-TWICE-4K-iphone-wallpaper.jpg' },
  { id: 10, name: 'Kim Shin', imageUrl: 'https://ilarge.lisimg.com/image/27115637/740full-kim-shin.jpg' },
];

const TeachersGalleryContainer = () => {
  // Here you could fetch or manage teachers data if needed
  return (
    <div>
      <TeacherGallery teachers={teachers} />
    </div>
  );
};

export default TeachersGalleryContainer;
