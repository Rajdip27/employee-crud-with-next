import { getAllDepartment } from "@/services/apiService/department/department.service";
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
  }, []);
  // const handleDelete=async(id)={

  // }

  return (
    <div className=" container ">
      <h4 className=" text-center  text-success mb-5 mt-3 ">Department List</h4>
      <table className=" table table-responsive table-bordered text-center  ">
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
              <td>{index + 1}</td>
              <td>{data.departmentName}</td>
              <td>
                <Link
                  href={`department/edit/${data.id}`}
                  className=" btn btn-success me-3 "
                >
                  Edit
                </Link>
                <a
                  // onClick={() => handleDelete(data.id)}
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
