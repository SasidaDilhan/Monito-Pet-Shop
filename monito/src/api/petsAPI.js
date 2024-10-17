const BASE_URL = "https://monitor-backend-rust.vercel.app/api/pets";

export const getPets = async () => {
  try {
    const response = await fetch(BASE_URL);

    if (!response) {
      throw new Error(`HTTP Error! status: ${response.status}`);
    }

    const pets = await response.json();
    return pets;
  } catch (error) {
    console.log("Error Fetching Data ", error);
  }
};
