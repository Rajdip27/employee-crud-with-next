import {
  getCountry,
  updateCountry,
} from "@/services/apiService/country/country.service";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function editCountry() {
  const [data, setData] = useState({});
  const router = useRouter();

  const id = router.query.edit;

  useEffect(() => {
    const getData = async () => {
      const getCounty = await getCountry(id);
      setData(getCounty);
    };
    if (id != undefined) {
      getData();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const addedCountry = await updateCountry(id, data);
    console.log(addedCountry);
    router.push("/country"); // Use 'router' instead of 'useRouter'
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      id: data.id,
      [name]: value,
    });
  };

  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="p-4 border rounded shadow-sm"
      >
        <div className="mb-3">
          <label className="form-label">Country Name:</label>
          <input
            type="text"
            value={data.countryName}
            className="form-control"
            name="countryName"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
