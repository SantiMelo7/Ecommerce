import InputCreate from "./InputCreate";

export default function AddressForm({ itemAddress, setAddressChange }) {
  const { phone, streetAddress, postalCode, city, country } = itemAddress;
  return (
    <>
      <InputCreate
        label="Phone Number"
        value={phone}
        className="w-[70vh]"
        onChange={(ev) => setAddressChange("phone", ev.target.value)}
      />
      <InputCreate
        label="Street Address"
        value={streetAddress}
        className="w-[70vh]"
        onChange={(ev) => setAddressChange("streetAddress", ev.target.value)}
      />
      <div className="grid grid-cols-2 mx-auto relative left-20 gap-x-3">
        <InputCreate
          label="Postal Code"
          className="w-[35vh]"
          value={postalCode}
          onChange={(ev) => setAddressChange("postalCode", ev.target.value)}
        />
        <InputCreate
          label="City"
          className="w-[35vh]"
          value={city}
          onChange={(ev) => setAddressChange("city", ev.target.value)}
        />
      </div>
      <InputCreate
        label="Country"
        value={country}
        className="w-[70vh]"
        onChange={(ev) => setAddressChange("country", ev.target.value)}
      />
    </>
  );
}
