import './styles/input.style.css'

const Input = ({ placeholder, value, handleChange }) => {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      className="input"
    />
  )
}

export default Input
