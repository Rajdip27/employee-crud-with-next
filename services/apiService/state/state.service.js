import { apiUrl } from "@/environment/environment";

const getAllState = async () => {
  try {
    const response = await fetch(`${apiUrl}/State`);
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

const addState = async (data) => {
  console.log(data);
  try {
    const response = await fetch(`${apiUrl}/State`, {
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
export { getAllState, addState };
