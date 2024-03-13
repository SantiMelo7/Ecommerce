import GenericInput from "./GenericInput";

export default function AddressForm({ itemAddress, setAddressProp }) {
  const { phone, streetAddress, postalCode, city, country } = itemAddress;
  return (
    <div className="flex flex-col justify-center items-center">
      <GenericInput
        label="phone"
        value={phone}
        className="md:w-[70vh] sm:w-[40vh]"
        onChange={(ev) => setAddressProp("phone", ev.target.value)}
      />
      <div className="md:grid md:grid-cols-2 mx-auto md:relative left-2 gap-x-3">
        <GenericInput
          label="Postal Code"
          className="md:w-[35vh] sm:w-[40vh]"
          value={postalCode}
          onChange={(ev) => setAddressProp("postalCode", ev.target.value)}
        />
        <GenericInput
          label="City"
          className="md:w-[34vh] sm:w-[40vh]"
          value={city}
          onChange={(ev) => setAddressProp("city", ev.target.value)}
        />
      </div>
      <div className="md:grid md:grid-cols-2 mx-auto md:relative left-2 gap-x-3">
        <GenericInput
          label="Street Address"
          value={streetAddress}
          className="md:w-[35vh] sm:w-[40vh]"
          onChange={(ev) => setAddressProp("streetAddress", ev.target.value)}
        />
        <GenericInput
          label="Country"
          value={country}
          className="md:w-[34vh] sm:w-[40vh]"
          onChange={(ev) => setAddressProp("country", ev.target.value)}
        />
      </div>
    </div>
  );
}
