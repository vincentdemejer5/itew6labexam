import { useState, useEffect } from 'react'

const API_URL = 'https://jsonplaceholder.typicode.com/users'

type User = {
  id: number
  name: string
  email: string
  company: { name: string }
}

type FetchState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; message: string }

export function ApiPage() {
  const [state, setState] = useState<FetchState<User[]>>({ status: 'idle' })

  useEffect(() => {
    setState({ status: 'loading' })
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`)
        return res.json()
      })
      .then((data: User[]) => setState({ status: 'success', data }))
      .catch((err: Error) =>
        setState({ status: 'error', message: err.message ?? 'Failed to fetch data' })
      )
  }, [])

  if (state.status === 'loading') {
    return (
      <div className="app">
        <h1>API Demo</h1>
        <p className="page-desc">Fetching from JSONPlaceholder (users).</p>
        <div className="api-loading" aria-busy="true">
          <span className="api-loading-spinner" aria-hidden="true" />
          <p>Loading…</p>
        </div>
      </div>
    )
  }

  if (state.status === 'error') {
    return (
      <div className="app">
        <h1>API Demo</h1>
        <p className="page-desc">Fetching from JSONPlaceholder (users).</p>
        <div className="api-error" role="alert">
          <strong>Error</strong>
          <p>{state.message}</p>
        </div>
      </div>
    )
  }

  if (state.status === 'success') {
    return (
      <div className="app">
        <h1>API Demo</h1>
        <p className="page-desc">Users from JSONPlaceholder.</p>
        <ul className="api-list">
          {state.data.map((user) => (
            <li key={user.id} className="api-list-item">
              <strong>{user.name}</strong>
              <span className="api-list-email">{user.email}</span>
              <span className="api-list-company">{user.company.name}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return null
}
