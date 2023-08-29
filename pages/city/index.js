import { useEffect, useState } from "react";
import {
  deletCity,
  getCities,
} from "../../services/apiService/city/city.service";
import Link from "next/link";

export default function City() {
  const [data, setData] = useState([]);
  const length = data.length;
  useEffect(() => {
    const getData = async () => {
      const getAllData = await getCities();
      setData(getAllData);
    };
    getData();
  }, []);
  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure to delete this City?");
    if (confirm) {
      try {
        // await id;
        const updatedData = data.filter((item) => item.id !== id);

        const deleteData = await deletCity(id);
        console.log(deleteData);

        if (deleteData) {
          setData(updatedData);
        }
      } catch (error) {
        console.error("Error deleting city:", error);
      }
    }
  };
  return (
    <>
      <div className=" container mt-5 ">
        <h4 className=" text-center text-info ">City List</h4>
        <a href="city/create" className=" btn btn-primary mb-3">
          Create City
        </a>
        <table className=" table  text-center  table-bordered  table-responsive ">
          <thead>
            <tr>
              <th>#</th>
              <th>State Name</th>
              <th>City Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, index) => (
              <tr key={index}>
                <td>{++index}</td>
                <td>{data.states.stateName}</td>
                <td>{data.cityName}</td>
                <td>
                  <Link
                    href={`city/edit/${data.id}`}
                    className="btn btn-success me-3 "
                  >
                    Edit
                  </Link>
                  <a
                    onClick={() => handleDelete(data.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
