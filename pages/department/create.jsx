import { addDepartment } from "@/services/apiService/department/department.service";
import { useRouter } from "next/router";
import { useState } from "react";

const createDepartment = () => {
  const [getdepartment, setdepartment] = useState({
    departmentName: "",
  });
  const router = useRouter();
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setdepartment({ [name]: value });
  };
  console.log(getdepartment);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const adddepartment = await addDepartment(getdepartment);
    console.log(adddepartment);
    router.push("/department");
  };
  return (
    <>
      <div className=" container col-6  mt-5 ">
        <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
          <div className="mb-3">
            <label className="form-label">Department Name:</label>
            <input
              type="text"
              className="form-control"
              name="departmentName"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default createDepartment;
