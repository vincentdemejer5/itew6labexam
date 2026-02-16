import { useState } from 'react'

export type StudentProps = {
  name: string
  course: string
  year: number
  onAdvanceYear?: () => void
}

export function StudentComponent({ name, course, year, onAdvanceYear }: StudentProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleToggleDetails = () => {
    setIsExpanded((prev) => !prev)
  }

  return (
    <div className="student-card">
      <div className="student-main">
        <h2>{name}</h2>
        <p><strong>Course:</strong> {course}</p>
        <p><strong>Year:</strong> {year}</p>
      </div>
      <div className="student-actions">
        <button type="button" onClick={handleToggleDetails}>
          {isExpanded ? 'Hide details' : 'Show details'}
        </button>
        {onAdvanceYear != null && (
          <button type="button" onClick={onAdvanceYear}>
            Advance year
          </button>
        )}
      </div>
      {isExpanded && (
        <div className="student-details">
          <p>Student is in year {year} of {course}.</p>
        </div>
      )}
    </div>
  )
}
