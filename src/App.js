import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; 

function App() {
  const [mentorName, setMentorName] = useState('');
  const [studentName, setStudentName] = useState('');
  const [mentorId, setMentorId] = useState('');
  const [studentId, setStudentId] = useState('');

  const createMentor = async () => {
    try {
      const response = await axios.post('/api/mentors', { name: mentorName });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createStudent = async () => {
    try {
      const response = await axios.post('/api/students', { name: studentName });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const assignMentor = async () => {
    try {
      const response = await axios.post(`/api/assign-mentor/${mentorId}/${studentId}`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Mentor-Student Assignment App</h1>

      {/* Create Mentor */}
      <div>
        <h2>Create Mentor</h2>
        <input
          type="text"
          placeholder="Mentor Name"
          value={mentorName}
          onChange={(e) => setMentorName(e.target.value)}
        />
        <button onClick={createMentor}>Create Mentor</button>
      </div>

      {/* Create Student */}
      <div>
        <h2>Create Student</h2>
        <input
          type="text"
          placeholder="Student Name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
        <button onClick={createStudent}>Create Student</button>
      </div>

      {/* Assign Mentor to Student */}
      <div>
        <h2>Assign Mentor to Student</h2>
        <input
          type="text"
          placeholder="Mentor ID"
          value={mentorId}
          onChange={(e) => setMentorId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Student ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />
        <button onClick={assignMentor}>Assign Mentor</button>
      </div>
    </div>
  );
}

export default App;

