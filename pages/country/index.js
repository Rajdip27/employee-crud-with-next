import { useEffect, useState } from "react";
import {
  deleteCountry,
  getAllCountry,
} from "@/services/apiService/country/country.service";
import Link from "next/link";

export default function Country() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const getCounty = await getAllCountry();
      setData(getCounty);
    };
    getData();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure to delete this country?");
    if (confirm) {
      try {
        await id;
        const updatedData = data.filter((item) => item.id !== id);
        setData(updatedData);
      } catch (error) {
        console.error("Error deleting country:", error);
      }
    }
  };
  return (
    <div className=" container ">
      <h4 className=" text-center text-success mt-5 ">Country List</h4>
      <a href="/country/create" className=" btn btn-primary mb-3">
        Create Country
      </a>
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
              <td>{index + 1}</td>
              <td>{data.countryName}</td>
              <td>
                <Link
                  href={`country/edit/${data.id}`}
                  className="btn btn-success me-3 "
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger "
                  onClick={() => handleDelete(data.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
