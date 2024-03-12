export default function GenericInput({
  label,
  type,
  value,
  onChange,
  id,
  name,
  className,
}) {
  return (
    <>
      <label>
        {label}
        <input
          className={className}
          type={type}
          value={value}
          onChange={onChange}
          id={id}
          name={name}
        />
      </label>
    </>
  );
}
