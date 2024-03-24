import GenericInput from "./GenericInput";

export default function AddressInput({
  address,
  setAddress,
  disabled = false,
}) {
  const { phone, postalCode, city, streetAddress, country } = address;
  return (
    <>
      <GenericInput
        disabled={disabled}
        label="phone"
        value={phone || ""}
        className="md:w-[70vh] sm:w-[40vh]"
        onChange={(ev) => setAddress("phone", ev.target.value)}
        id="phone"
        name="phone"
      />
      <div className="md:grid md:grid-cols-2 mx-auto md:relative gap-x-3">
        <GenericInput
          disabled={disabled}
          label="Postal Code"
          className="md:w-[34vh] sm:w-[40vh]"
          value={postalCode || ""}
          onChange={(ev) => setAddress("postalCode", ev.target.value)}
          id="postalCode"
          name="postalCode"
        />
        <GenericInput
          disabled={disabled}
          label="City"
          className="md:w-[34vh] sm:w-[40vh]"
          value={city || ""}
          onChange={(ev) => setAddress("city", ev.target.value)}
          id="city"
          name="city"
        />
      </div>
      <div className="md:grid md:grid-cols-2 mx-auto md:relative gap-x-3">
        <GenericInput
          disabled={disabled}
          label="Street Address"
          value={streetAddress || ""}
          className="md:w-[34vh] sm:w-[40vh]"
          onChange={(ev) => setAddress("streetAddress", ev.target.value)}
          id="streetAddress"
          name="streetAddress"
        />
        <GenericInput
          disabled={disabled}
          label="Country"
          id="country"
          name="country"
          value={country || ""}
          className="md:w-[34vh] sm:w-[40vh]"
          onChange={(ev) => setAddress("country", ev.target.value)}
        />
      </div>
    </>
  );
}
