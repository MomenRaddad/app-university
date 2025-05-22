
import students from './data/studentsData';
import Student from './components/student';
export default function App() {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">University Students</h2>
      <div className="d-flex flex-wrap">
        {students.map((student) => (
          <Student  name={student.name} major={student.major} />




        ))}
      </div>
    </div>
  );
}


