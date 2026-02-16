type HeaderComponentProps = {
  title: string
  subtitle?: string
}

export function HeaderComponent({ title, subtitle }: HeaderComponentProps) {
  return (
    <header className="header">
      <h1>{title}</h1>
      {subtitle != null && <p className="subtitle">{subtitle}</p>}
    </header>
  )
}
