export const cssLabelInput =
  "text-2xl text-gray-600 mb-2 font-bold uppercase mt-3";

export default function GenericInput({
  label,
  type,
  value,
  onChange,
  id,
  name,
}) {
  return (
    <>
      <label className={cssLabelInput}>
        {label}
        <input
          className="input-create"
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
