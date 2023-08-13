import {
  getdepartmentById,
  updateDepartment,
} from "@/services/apiService/department/department.service";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const editaDepartment = () => {
  const router = useRouter();
  const id = router.query.edit;
  console.log(id);
  const [data, setData] = useState({});
  useEffect(() => {
    const getData = async () => {
      const data = await getdepartmentById(id);
      setData(data);
    };
    if (id != undefined) {
      getData();
    }
  }, [id]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      id: data.id,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedepartment = await updateDepartment(id, data);
    console.log(updatedepartment);
    router.push("/department");
  };
  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="p-4 border rounded shadow-sm"
      >
        <div className="mb-3">
          <label className="form-label">Department Name:</label>
          <input
            type="text"
            className="form-control"
            name="departmentName"
            onChange={(e) => handleChange(e)}
            value={data.departmentName}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
export default editaDepartment;
