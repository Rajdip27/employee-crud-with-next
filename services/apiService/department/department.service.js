const { apiUrl } = require("@/environment/environment");

const getAllDepartment = async () => {
  try {
    const response = await fetch(`${apiUrl}/Department`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
const addDepartment = async (data) => {
  try {
    const response = await fetch(`${apiUrl}/Department`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const getdepartmentById = async (id) => {
  console.log(id);
  try {
    const response = await fetch(`${apiUrl}/department/${id}`, { cors: true });
    console.log(response);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const updateDepartment = async (id, data) => {
  try {
    const response = await fetch(`${apiUrl}/department/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const responseBody = await response.text();
      // throw new Error(`Network response was not ok: ${response.status} - ${responseBody}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
};

export { getAllDepartment, addDepartment, getdepartmentById, updateDepartment };
