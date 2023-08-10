import { apiUrl } from "@/environment/environment";

async function getAllCountry() {
  try {
    const response = await fetch(`${apiUrl}/Country`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
export { getAllCountry };
