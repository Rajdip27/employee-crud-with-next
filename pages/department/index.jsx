import {
  deleteDeparment,
  getAllDepartment,
} from "@/services/apiService/department/department.service";
import Link from "next/link";
import { useEffect, useState } from "react";

const getDepartment = () => {
  const [department, setDepartment] = useState([]);
  useEffect(() => {
    const getdata = async () => {
      const data = await getAllDepartment();
      setDepartment(data);
    };
    getdata();
  }, [department]);
  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure to delete this country?");

    if (confirm) {
      try {
        // await id;
        const updatedData = data.filter((item) => item.id !== id);
        const updateData = await deleteDeparment(id);
        if (updateData) {
          setData(updateData);
        }
      } catch (error) {
        console.error("Error deleting country:", error);
      }
    }
  };

  return (
    <div className=" container ">
      <h4 className=" text-center  text-success mb-5 mt-3 ">Department List</h4>
      <a href="/department/create" className=" btn btn-primary  ">
        Create Department
      </a>

      <table className=" table table-responsive table-bordered text-center mt-3 ">
        <thead>
          <tr>
            <th>#</th>
            <th>Department Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {department.map((data, index) => (
            <tr key={index}>
              <td>{(index += 1)}</td>
              <td>{data.departmentName}</td>
              <td>
                <Link
                  href={`department/edit/${data.id}`}
                  className=" btn btn-success me-3 "
                >
                  Edit
                </Link>
                <a
                  onClick={() => handleDelete(data.id)}
                  className=" btn btn-danger "
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

export default getDepartment;
