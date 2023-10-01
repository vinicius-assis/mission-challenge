import Link from "next/link"
import { memo, useState } from "react"

const colorSwitch = {
  success: 'bg-green-500 enabled:hover:bg-green-600',
  danger: 'bg-red-500 enabled:hover:bg-red-600',
  info: 'bg-blue-500 enabled:hover:bg-blue-600'
}

const DefaultButton = ({
  content,
  className,
  style,
  disabled,
  type = 'button',
  variant = 'info',
  onClick
}: IButton) => {
  const [loadingButton, setLoadingButton] = useState(false)
  const buttonColor = colorSwitch[variant]

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setLoadingButton(true)
    onClick && onClick(event)
    setTimeout(() => setLoadingButton(false), 200)
  }

  return (
    <button
    type={type}
    disabled={disabled || loadingButton}
    style={style}
    className={`py-1 px-3 rounded-md ${buttonColor}  disabled:opacity-50 ${className || ''}`}
    onClick={handleClick}
    >{content}</button>
)}

const Button = ({
  to,
  ...props
}: IButton) => {

  return to
    ? (
      <Link href={to}>
        <DefaultButton {...props} /> 
      </Link>
    ) : (
      <DefaultButton {...props} />
    )
}

export default memo(Button)
