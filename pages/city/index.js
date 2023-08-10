import { useEffect, useState } from "react";
import { getCities } from "../../services/apiService/city/city.service";

export default function City() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const getAllData = await getCities();
      setData(getAllData);
    };
    getData();
  }, []);

  return (
    <>
      <div className=" container mt-5 ">
        <h4 className=" text-center text-info ">City List</h4>
        <table className=" table  text-center  table-bordered  table-responsive ">
          <thead>
            <tr>
              <th>#</th>
              <th>City Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, index) => (
              <tr key={index}>
                <td>{data.id}</td>
                <td>{data.cityName}</td>
                <td>
                  <button className="btn btn-success me-3 ">Edit</button>
                  <button className="btn btn-danger ">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
