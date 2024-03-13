export default function GenericInput({
  label,
  type,
  value,
  onChange,
  id,
  name,
  disabled,
  checked,
  className,
}) {
  return (
    <>
      <label>
        {label}
        <input
          checked={checked}
          className={className}
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
