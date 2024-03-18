export default function GenericInput({
  label,
  type,
  value,
  onChange,
  id,
  name,
  disabled,
  className,
}) {
  return (
    <>
      <label>
        {label}
        <input
          className={className}
          autoComplete="on"
          type={type}
          value={value}
          onChange={onChange}
          id={id}
          name={name}
          disabled={disabled}
        />
      </label>
    </>
  );
}
