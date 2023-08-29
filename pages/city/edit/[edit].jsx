import { getCityId, updateCity } from "@/services/apiService/city/city.service";
import { getAllState } from "@/services/apiService/state/state.service";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const editCity = () => {
  const [data, setData] = useState();
  const [state, setState] = useState([]);

  const router = useRouter();

  const id = router.query.edit;

  useEffect(() => {
    const getSelectedState = async () => {
      setData(await getCityId(id));
    };
    const setStatedata = async () => {
      setState(await getAllState());
    };
    if (id != undefined) {
      getSelectedState();
      setStatedata();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updateData = await updateCity(id, data);
    console.log(updateData);
    router.push("/city");
  };
  const handleChange = async (e) => {
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
          <label className="form-label">State Name</label>
          <select
            className=" form-control "
            name="stateId"
            onChange={(e) => handleChange(e)}
          >
            <option value="">-- Select State --</option>

            {data != undefined &&
              state.map((da, index) => (
                <option
                  value={da.id}
                  selected={data != undefined && data.stateId == da.id}
                  key={index}
                >
                  {" "}
                  {da.stateName}{" "}
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
            value={data != undefined && data.cityName}
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
export default editCity;
