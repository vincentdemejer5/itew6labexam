import { useParams, Link } from 'react-router-dom'

const STUDENTS: Record<string, { name: string; course: string; year: number }> = {
  '1': { name: 'Jane Doe', course: 'Computer Science', year: 2 },
  '2': { name: 'John Smith', course: 'Mathematics', year: 3 },
  '3': { name: 'Alex Lee', course: 'Engineering', year: 1 },
}

export function StudentDetailPage() {
  const { id } = useParams<{ id: string }>()
  const student = id != null ? STUDENTS[id] : undefined

  if (student == null) {
    return (
      <div className="app">
        <div className="not-found">
          <p>Student not found.</p>
          <Link to="/students">← Back to Students</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <div className="student-card">
        <div className="student-main">
          <h2>{student.name}</h2>
          <p><strong>Course:</strong> {student.course}</p>
          <p><strong>Year:</strong> {student.year}</p>
        </div>
      </div>
      <Link to="/students" className="nav-link back-link">← Back to Students</Link>
    </div>
  )
}
