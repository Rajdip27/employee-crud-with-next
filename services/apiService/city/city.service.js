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

export { getCities };
