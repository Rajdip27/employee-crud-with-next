import { getAllState } from "@/services/apiService/state/state.service";
import { useState } from "react";

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
  return (
    <div className=" container mt-5 mb-5 ">
      <h4 className=" text-center text-success mt-3 ">State List</h4>
      <a href="/state/create" className=" btn btn-primary ">
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
                <button className="btn btn-success mx-3">Edit</button>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default State;
