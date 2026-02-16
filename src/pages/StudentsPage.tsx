import { Link } from 'react-router-dom'

const STUDENTS = [
  { id: '1', name: 'Jane Doe', course: 'Computer Science', year: 2 },
  { id: '2', name: 'John Smith', course: 'Mathematics', year: 3 },
  { id: '3', name: 'Alex Lee', course: 'Engineering', year: 1 },
]

export function StudentsPage() {
  return (
    <div className="app">
      <h1>Students</h1>
      <p className="page-desc">Select a student to view details.</p>
      <ul className="student-list">
        {STUDENTS.map((s) => (
          <li key={s.id}>
            <Link to={`/students/${s.id}`} className="student-link">
              {s.name} — {s.course}, Year {s.year}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
