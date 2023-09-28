interface IButton  {
  content: string
  className?: string
  style?: React.CSSProperties
  disabled?: boolean
  variant?: 'success' | 'danger' | 'info'
}