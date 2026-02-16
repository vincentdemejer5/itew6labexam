import { useState } from 'react'
import { HeaderComponent } from '../components/HeaderComponent'
import { StudentComponent } from '../components/StudentComponent'

export function HomePage() {
  const [student, setStudent] = useState({
    name: 'Jane Doe',
    course: 'Computer Science',
    year: 2,
  })

  const handleResetYear = () => {
    setStudent((prev) => ({ ...prev, year: 1 }))
  }

  const handleAdvanceYear = () => {
    setStudent((prev) => ({ ...prev, year: prev.year + 1 }))
  }

  return (
    <div className="app">
      <HeaderComponent
        title="Student Information"
        subtitle="Components, props & state demo"
      />
      <main>
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
