import React from 'react';
import CalendarComponent from '../components/CalendarComponent';

const Home = () => {
  return (
    <div style={{ 
        backgroundColor: '#D8ECF2', // Light blue background
        padding: '2rem 1rem',
        marginBottom: '2rem',
        textAlign: 'center'
    }}>
      <h1 style={{ 
          fontSize: '3.5rem',
          fontWeight: 'bold',
          backgroundColor: '#D8ECF2',
          height: '150px'

      }}>
        My Personal Agenda
      </h1>
      <p style={{
          fontSize: '1.2rem'
      }}>
        Welcome to your personal agenda. Here you can view and manage your scheduled events.
      </p>
      <CalendarComponent />
    </div>
  );
};

export default Home;
