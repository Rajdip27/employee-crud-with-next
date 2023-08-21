import { getAllCountry } from "@/services/apiService/country/country.service";
import {
  getStateById,
  updateCity,
} from "@/services/apiService/state/state.service";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const editState = () => {
  const router = useRouter();
  const id = router.query.edit;

  const [data, setData] = useState();
  const [country, setCountry] = useState([]);
  useEffect(() => {
    const getSelectedCountry = async () => {
      const newData = await getStateById(id);
      setData(newData);
    };
    const getData = async () => {
      const state = await getAllCountry();
      setCountry(state);
    };

    if (id != undefined) {
      getSelectedCountry();
      getData();
    }
  }, [id]);

  const handleSubmit = async () => {
    e.preventDefault();

    const addedCountry = await updateCity(id, data);
    console.log(addedCountry);
    router.push("/country"); // Use 'router' instead of 'useRouter'
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      id: data.id,
      ...data,
      [name]: value,
    });
  };
  console.log(data);

  return (
    <div className=" container col-6  mt-5 ">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="p-4 border rounded shadow-sm"
      >
        <div>
          <label className="form-label">Country Name</label>
          <select
            className=" form-control "
            name="countryId"
            onChange={(e) => handleChange(e)}
          >
            <option value="">-- Select Country --</option>

            {data != undefined &&
              country.map((da, index) => (
                <option
                  value={da.id}
                  selected={data != undefined && data.countryId == da.id}
                  key={index}
                >
                  {" "}
                  {da.countryName}{" "}
                </option>
              ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">State Name:</label>
          <input
            type="text"
            className="form-control"
            name="stateName"
            value={data != undefined && data.stateName}
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
export default editState;
