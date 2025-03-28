
const Input = ({ type = "text", name, placeholder, value, onChange, className = "" }) => {
    return (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`input ${className}`}
        required
      />
    );
  };
export default Input;