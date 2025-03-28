

const Button = ({children, disabled, handleClick, className}) => {
  return (
    <button
    disabled={disabled}
    className={`button mt-3 ${className}`}
    onClick ={handleClick}
    >{children}</button>
  )
}

export default Button;