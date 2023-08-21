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
const getStateById = async (id) => {
  try {
    const response = await fetch(`${apiUrl}/state/${id}`, { cors: true });
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
async function deleteState(id) {
  try {
    const response = await fetch(`${apiUrl}/state/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Network response was not ok: `);
    }

    return true; // Return a success indicator or any relevant data
  } catch (error) {
    console.error("Error deleting country:", error);
    throw error;
  }
}

async function updateCity(id, data) {
  console.log(id, data);
  try {
    const response = await fetch(`${apiUrl}/City/${id}`, {
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
}
export { getAllState, addState, getStateById, deleteState, updateCity };
