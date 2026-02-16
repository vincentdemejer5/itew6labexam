import { useState } from 'react'
import { HeaderComponent } from '../components/HeaderComponent'
import { StudentComponent } from '../components/StudentComponent'

const STUDENTS = [
  { id: '1', name: 'Jane Doe', course: 'Computer Science', year: 2 },
  { id: '2', name: 'John Smith', course: 'Mathematics', year: 3 },
  { id: '3', name: 'Alex Lee', course: 'Engineering', year: 1 },
]

export function HomePage() {
  const [students, setStudents] = useState(STUDENTS)
  const [selectedId, setSelectedId] = useState(STUDENTS[0].id)

  const student = students.find((s) => s.id === selectedId) ?? students[0]

  const handleResetYear = () => {
    setStudents((prev) =>
      prev.map((s) => (s.id === selectedId ? { ...s, year: 1 } : s))
    )
  }

  const handleAdvanceYear = () => {
    setStudents((prev) =>
      prev.map((s) =>
        s.id === selectedId ? { ...s, year: s.year + 1 } : s
      )
    )
  }

  return (
    <div className="app">
      <HeaderComponent
        title="Student Information"
        subtitle="Components, props & state demo"
      />
      <main>
        <div className="student-switch">
          <label htmlFor="student-select">Show student:</label>
          <select
            id="student-select"
            value={selectedId}
            onChange={(e) => setSelectedId(e.target.value)}
            className="student-select"
          >
            {students.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name} — {s.course}, Year {s.year}
              </option>
            ))}
          </select>
        </div>
        <StudentComponent
          name={student.name}
          course={student.course}
          year={student.year}
          onAdvanceYear={handleAdvanceYear}
        />
        <button type="button" className="reset-btn" onClick={handleResetYear}>
          Reset to Year 1
        </button>
      </main>
    </div>
  )
}
