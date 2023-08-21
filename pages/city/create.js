import { addCity } from "@/services/apiService/city/city.service";
import { getAllState } from "@/services/apiService/state/state.service";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const createCity = () => {
  const [state, setState] = useState([]);
  const [selectedStateId, setSelectedStateId] = useState("");
  const [cityName, setCityName] = useState("");
  const router = useRouter();
  useEffect(() => {
    const getData = async () => {
      try {
        const listData = await getAllState();
        setState(listData);
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };
    getData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await addCity(cityName);
      console.log("API Response:", response);

      // If you're using React Router for navigation
      router.push("/city");
    } catch (error) {
      console.error("Error adding state:", error);
      // Handle error as needed
    }
  };
  // const handleStateChange = (e) => {
  //   setSelectedStateId(e.target.value);
  // };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type == "select-one") {
      setCityName({
        ...cityName,
        [name]: value,
      });
    }
    setCityName({
      ...cityName,
      [name]: value,
    });
  };

  console.log(cityName);
  return (
    <div className="container col-6 mt-5">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="p-4 border rounded shadow-sm"
      >
        <div>
          <label className="form-label">Country Name</label>
          <select
            className="form-control"
            name="stateId"
            onChange={(e) => handleChange(e)}
            // value={selectedStateId}
          >
            <option value="">-- Select State --</option>
            {state.map((data) => (
              <option value={data.id} key={data.id}>
                {data.stateName}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">City Name:</label>
          <input
            type="text"
            className="form-control"
            name="cityName"
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

export default createCity;
