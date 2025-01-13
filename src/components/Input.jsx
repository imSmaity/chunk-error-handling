const Input = ({ placeholder, value, handleChange }) => {
  return (
    <input placeholder={placeholder} value={value} onChange={handleChange} />
  )
}

export default Input
