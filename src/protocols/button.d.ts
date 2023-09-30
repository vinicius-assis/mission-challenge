interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement>  {
  content: string
  className?: string
  style?: React.CSSProperties
  disabled?: boolean
  variant?: 'success' | 'danger' | 'info'
  to?: string
  type?: 'button' | 'submit' | 'reset'
}