import { apiUrl } from "@/environment/environment";

async function getCities() {
  try {
    const response = await fetch(`${apiUrl}/City`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
const addCity = async (data) => {
  try {
    const response = await fetch(`${apiUrl}/City`, {
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

async function deletCity(id) {
  try {
    const response = await fetch(`${apiUrl}/City/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Network response was not ok: `);
    }

    return true; // Return a success indicator or any relevant data
  } catch (error) {
    console.error("Error deleting City:", error);
    throw error;
  }
}

export { getCities, addCity, deletCity };
