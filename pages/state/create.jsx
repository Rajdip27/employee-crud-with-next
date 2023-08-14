import { getAllCountry } from "@/services/apiService/country/country.service";
import {
  addState,
  getAllState,
} from "@/services/apiService/state/state.service";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const create = () => {
  const [state, setState] = useState([]);
  const [formData, setFormData] = useState([]);
  useEffect(() => {
    const getdata = async () => {
      const data = await getAllCountry();
      setState(data);
    };
    getdata();
  }, []);

  const router = useRouter();

  const handleChange = async (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const a = await addState(formData);
    console.log(a);

    router.push("/state");
  };

  return (
    <>
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
              onClick={(e) => handleChange(e)}
              id=""
            >
              <option value="">-- Select Country --</option>
              {state.map((data, index) => (
                <option value={data.id} key={index}>
                  {" "}
                  {data.countryName}{" "}
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
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default create;
