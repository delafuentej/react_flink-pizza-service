import { Link } from "react-router-dom"

const LinkButton = ({children, to, className}) => {
  return (
    <Link 
        className={`button ${className}`}
        to={to}
        >
        {children}
        
    </Link>
  )
}

export default LinkButton