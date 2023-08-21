import { getAllState } from "@/services/apiService/state/state.service";
import { useState } from "react";
import Link from "next/link";

const State = () => {
  const [state, setState] = useState([]);
  useState(() => {
    const getData = async () => {
      const state = await getAllState();
      setState(state);
    };
    getData();
  }, []);
  console.log(state);
  const handleDelete = async () => {
    const confirm = window.confirm("Are you sure to delete this country?");

    if (confirm) {
      try {
        // await id;
        // const updatedData = data.filter((item) => item.id !== id);
        const updateData = await deleteState(id);

        // setData(updateData);
      } catch (error) {
        console.error("Error deleting country:", error);
      }
    }
  };
  return (
    <div className=" container mt-5 mb-5 ">
      <h4 className=" text-center text-success mt-3 ">State List</h4>
      <a href="/state/create" className=" btn btn-primary mb-3">
        Create State
      </a>
      <table className=" table  table-bordered  table-responsive ">
        <thead>
          <tr>
            <th>#</th>
            <th>Country Name</th>
            <th>State Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.country.countryName}</td>
              <td>{data.stateName}</td>
              <td>
                <Link
                  href={`state/edit/${data.id}`}
                  className="btn btn-success mx-3"
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
  );
};

export default State;
