import { useEffect, useState } from "react";
import { getAllCountry } from "@/services/apiService/country/country.service";

export default function Country() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const getCounty = await getAllCountry();
      setData(getCounty);
    };
    getData();
  }, []);
  console.log(data);
  return (
    <div className=" container ">
      <h4 className=" text-center text-success mt-5 ">Country List</h4>
      <table className=" table text-center   table-bordered  table-responsive ">
        <thead>
          <tr>
            <th>#</th>
            <th>Country Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => (
            <tr key={index}>
              <td>{data.id}</td>
              <td>{data.countryName}</td>
              <td>
                <button className="btn btn-success me-3 ">Edit</button>
                <button className="btn btn-danger ">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
