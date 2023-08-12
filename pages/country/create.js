import { useState } from "react";
import { addCountry } from "@/services/apiService/country/country.service";
import { useRouter } from "next/router";
const createCountry = () => {
  const [countryName, setCountryName] = useState({
    countryName: "",
  });
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    const addedCountry = addCountry(countryName);
    console.log(addedCountry);
    router.push("/country");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCountryName({ [name]: value });
    e.preventDefault();
  };

  console.log(countryName);

  return (
    <div className=" container col-6  mt-5 ">
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
        <div className="mb-3">
          <label className="form-label">Country Name:</label>
          <input
            type="text"
            className="form-control"
            name="countryName"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default createCountry;
