import './styles/button.style.css'

const Button = ({ children, handleClick }) => {
  return (
    <button onClick={handleClick} className="btn">
      {children}
    </button>
  )
}

export default Button
