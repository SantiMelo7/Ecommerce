import GenericInput from "./GenericInput";

export default function InputCreate({
  label,
  name = "text",
  type,
  value,
  onChange,
  id,
  className,
}) {
  return (
    <GenericInput
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      id={id}
      name={name}
      className={className}
    />
  );
}
