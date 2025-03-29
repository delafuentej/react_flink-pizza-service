
const Input = ({ type = "text", name, placeholder, value, defaultValue, onChange, className = "", disabled }) => {
    return (
      <input
        disabled={disabled}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        className={`input ${className}`}
        required
      />
    );
  };
export default Input;