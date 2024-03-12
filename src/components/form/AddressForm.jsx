import InputCreate from "./InputCreate";

export default function AddressForm({ itemAddress, setAddressProp }) {
  const { phone, streetAddress, postalCode, city, country } = itemAddress;
  return (
    <div className="flex flex-col justify-center items-center">
      <InputCreate
        label="Phone Number"
        value={phone}
        className="md:w-[70vh] sm:w-[40vh]"
        onChange={(ev) => setAddressProp("phone", ev.target.value)}
      />
      <InputCreate
        label="Street Address"
        value={streetAddress}
        className="md:w-[70vh] sm:w-[40vh]"
        onChange={(ev) => setAddressProp("streetAddress", ev.target.value)}
      />
      <div className="md:grid md:grid-cols-2 mx-auto md:relative left-2 gap-x-3">
        <InputCreate
          label="Postal Code"
          className="md:w-[35vh] sm:w-[40vh]"
          value={postalCode}
          onChange={(ev) => setAddressProp("postalCode", ev.target.value)}
        />
        <InputCreate
          label="City"
          className="md:w-[35vh] sm:w-[40vh]"
          value={city}
          onChange={(ev) => setAddressProp("city", ev.target.value)}
        />
      </div>
      <InputCreate
        label="Country"
        value={country}
        className="md:w-[70vh] sm:w-[40vh]"
        onChange={(ev) => setAddressProp("country", ev.target.value)}
      />
    </div>
  );
}
