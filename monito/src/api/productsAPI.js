const BASE_URL = "https://monitor-backend-rust.vercel.app/api/products";

export const getProducts = async () => {
  try {
    const response = await fetch(BASE_URL);

    if (!response) {
      throw new Error(`HTTP Error! status: ${response.status}`);
    }

    const products = await response.json();
    return products;
  } catch (error) {
    console.log("Error Fetching Data ", error);
  }
};
