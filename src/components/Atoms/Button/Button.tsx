import Link from "next/link"

const colorSwitch = {
  success: 'bg-green-500 hover:bg-green-600',
  danger: 'bg-red-500 hover:bg-red-600',
  info: 'bg-blue-500 hover:bg-blue-600'
}

const Button = ({ content, className, style, disabled, variant = 'info', to = '' }: IButton) => {
  const buttonColor = colorSwitch[variant]

  return <button
    disabled={disabled}
    style={style}
    className={`py-1 px-3 rounded-sm ${buttonColor} ${className}`}
    >
      {to ? (
        <Link href={to}>{content}</Link>
      ) : content}
    </button>
}

export default Button
