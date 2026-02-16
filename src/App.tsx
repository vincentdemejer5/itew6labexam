import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { StudentsPage } from './pages/StudentsPage'
import { StudentDetailPage } from './pages/StudentDetailPage'
import { ApiPage } from './pages/ApiPage'

function NavLinkWithActive({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
      end={to === '/'}
    >
      {children}
    </NavLink>
  )
}

export function App() {
  return (
    <BrowserRouter>
      <nav className="main-nav">
        <NavLinkWithActive to="/">Home</NavLinkWithActive>
        <NavLinkWithActive to="/students">Students</NavLinkWithActive>
        <NavLinkWithActive to="/api">API Demo</NavLinkWithActive>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/students/:id" element={<StudentDetailPage />} />
        <Route path="/api" element={<ApiPage />} />
      </Routes>
    </BrowserRouter>
  )
}
